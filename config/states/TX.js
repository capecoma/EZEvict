module.exports = {
  notices: {
    '3Day': {
      name: 'Three-Day Notice to Vacate',
      requirements: {
        minimumNoticePeriod: 3,
        serviceMethods: [
          'personal',
          'mail',
          'posting_with_mail'
        ],
        requiredContent: [
          'tenant_name',
          'property_address',
          'termination_date',
          'delivery_method'
        ]
      },
      timeline: {
        responseDeadline: 3,
        courtFilingEligible: 4,
        defaultJudgmentEligible: 6
      }
    },
    'NonPayment': {
      name: 'Notice to Vacate for Non-Payment',
      requirements: {
        minimumNoticePeriod: 1, // TX allows 1-day notice
        serviceMethods: [
          'personal',
          'mail',
          'posting_with_mail'
        ]
      }
    }
  },
  courtForms: {
    requiredForms: [
      'JP-E1', // Petition for Eviction
      'JP-E2', // Citation
      'JP-E3'  // Judgment
    ],
    fees: {
      filing: 121,
      service: 75
    },
    venues: {
      court: 'Justice of the Peace',
      requirements: [
        'proper_precinct',
        'business_hours_filing'
      ]
    }
  },
  restrictions: {
    protectedPeriods: [
      'declared_disaster',
      'military_service'
    ],
    requiredDisclosures: [
      'property_code_rights',
      'security_deposit_rights'
    ]
  }
}