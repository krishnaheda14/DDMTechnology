import React, { useEffect, useMemo, useState } from 'react'
import styles from './GrowthCalculator.module.css'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Button } from '@components/ui/Button'
import { scrollToSection } from '@utils/scroll'

const formatINR = (amount: number) => {
  return `INR ${Math.round(amount).toLocaleString('en-IN')}`
}

export const GrowthCalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState(12)
  const [hoursPerWeek, setHoursPerWeek] = useState(16)
  const [hourlyCost, setHourlyCost] = useState(750)
  const [manualWorkPercent, setManualWorkPercent] = useState(35)

  const [operationsComplexity, setOperationsComplexity] = useState<'low' | 'medium' | 'high'>('medium')
  const [toolCount, setToolCount] = useState(7)
  const [manualDependency, setManualDependency] = useState<'low' | 'medium' | 'high'>('high')

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  const monthlyWaste = useMemo(() => {
    return teamSize * hoursPerWeek * 4 * hourlyCost * (manualWorkPercent / 100)
  }, [teamSize, hoursPerWeek, hourlyCost, manualWorkPercent])

  const monthlySavings = useMemo(() => monthlyWaste * 0.6, [monthlyWaste])
  const annualSavings = useMemo(() => monthlySavings * 12, [monthlySavings])

  const readinessScore = useMemo(() => {
    const complexityScore = operationsComplexity === 'high' ? 35 : operationsComplexity === 'medium' ? 25 : 15
    const toolsScore = toolCount >= 10 ? 30 : toolCount >= 6 ? 20 : 10
    const manualScore = manualDependency === 'high' ? 35 : manualDependency === 'medium' ? 25 : 15
    return Math.min(100, complexityScore + toolsScore + manualScore)
  }, [manualDependency, operationsComplexity, toolCount])

  const readinessLabel = useMemo(() => {
    if (readinessScore >= 80) return 'High-impact opportunity'
    if (readinessScore >= 60) return 'Strong automation fit'
    return 'Moderate fit - quick wins possible'
  }, [readinessScore])

  useEffect(() => {
    const getMonthEnd = () => {
      const now = new Date()
      return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
    }

    const updateCountdown = () => {
      const now = new Date().getTime()
      const end = getMonthEnd().getTime()
      const distance = Math.max(0, end - now)

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.growthCalculator} id="calculator">
      <div className={styles.container}>
        <SectionTitle
          title="Interactive Growth Calculator"
          subtitle="Estimate your automation upside in under 30 seconds"
        />

        <div className={styles.layout}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>ROI Estimator</h3>

            <label className={styles.label}>
              Team members involved in operations: {teamSize}
              <input
                className={styles.slider}
                type="range"
                min={3}
                max={100}
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
              />
            </label>

            <label className={styles.label}>
              Hours/week spent on repetitive tasks: {hoursPerWeek}
              <input
                className={styles.slider}
                type="range"
                min={4}
                max={40}
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              />
            </label>

            <label className={styles.label}>
              Average team cost per hour (INR): {hourlyCost}
              <input
                className={styles.slider}
                type="range"
                min={250}
                max={3000}
                step={50}
                value={hourlyCost}
                onChange={(e) => setHourlyCost(Number(e.target.value))}
              />
            </label>

            <label className={styles.label}>
              % of work still manual: {manualWorkPercent}%
              <input
                className={styles.slider}
                type="range"
                min={10}
                max={80}
                value={manualWorkPercent}
                onChange={(e) => setManualWorkPercent(Number(e.target.value))}
              />
            </label>

            <div className={styles.resultGrid}>
              <div className={styles.resultItem}>
                <span className={styles.resultLabel}>Monthly Waste</span>
                <span className={styles.resultValue}>{formatINR(monthlyWaste)}</span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.resultLabel}>Potential Monthly Savings</span>
                <span className={styles.resultValue}>{formatINR(monthlySavings)}</span>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.resultLabel}>Potential Annual Impact</span>
                <span className={styles.resultValue}>{formatINR(annualSavings)}</span>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Automation Readiness Check</h3>

            <label className={styles.selectLabel}>
              Operations complexity
              <select
                className={styles.select}
                value={operationsComplexity}
                onChange={(e) => setOperationsComplexity(e.target.value as 'low' | 'medium' | 'high')}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>

            <label className={styles.label}>
              Number of tools/systems in use: {toolCount}
              <input
                className={styles.slider}
                type="range"
                min={1}
                max={20}
                value={toolCount}
                onChange={(e) => setToolCount(Number(e.target.value))}
              />
            </label>

            <label className={styles.selectLabel}>
              Manual dependency
              <select
                className={styles.select}
                value={manualDependency}
                onChange={(e) => setManualDependency(e.target.value as 'low' | 'medium' | 'high')}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>

            <div className={styles.readinessBox}>
              <div className={styles.readinessScore}>{readinessScore}/100</div>
              <div className={styles.readinessLabel}>{readinessLabel}</div>
            </div>

            <div className={styles.urgencyCard}>
              <p className={styles.urgencyTitle}>Limited Founder-led Onboarding Window</p>
              <p className={styles.urgencyText}>
                Book before month-end to get a free process architecture audit with your roadmap.
              </p>

              <div className={styles.countdown}>
                <div><strong>{timeLeft.days}</strong><span>d</span></div>
                <div><strong>{timeLeft.hours}</strong><span>h</span></div>
                <div><strong>{timeLeft.minutes}</strong><span>m</span></div>
                <div><strong>{timeLeft.seconds}</strong><span>s</span></div>
              </div>

              <div className={styles.actions}>
                <Button variant="primary" size="lg" onClick={() => scrollToSection('contact')}>
                  Claim Free Audit
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('products')}>
                  See Relevant Solutions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
