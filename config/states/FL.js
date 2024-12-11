module.exports = {
  notices: {
    '3Day': {
      name: 'Three-Day Notice to Pay Rent or Vacate',
      requirements: {
        minimumNoticePeriod: 3,
        serviceMethods: ['personal', 'mail', 'posting'],
        requiredContent: [
          'tenant_name',
          'property_address',
          'rent_amount',
          'rent_period',
          'landlord_info',
          'exact_amount_owed' // FL specific requirement
        ]
      },
      timeline: {
        responseDeadline: 3,
        courtFilingEligible: 4,
        defaultJudgmentEligible: 5
      },
      restrictions: {
        mustAcceptPartialPayment: false,
        weekendHolidayRules: true
      }
    },
    '7Day': {
      name: 'Seven-Day Notice to Cure or Vacate',
      requirements: {
        minimumNoticePeriod: 7,
        applicableTo: 'lease_violations',
        serviceMethods: ['personal', 'mail', 'posting'],
        requiredContent: [
          'specific_violation_description',
          'cure_instructions'
        ]
      }
    },
    '15Day': {
      name: 'Fifteen-Day Notice to Terminate Month-to-Month Tenancy',
      requirements: {
        minimumNoticePeriod: 15,
        applicableTo: 'month_to_month'
      }
    }
  },
  courtForms: {
    requiredForms: [
      'FORM_76A', // Complaint for Eviction
      'FORM_78', // Summons
      'FORM_81' // Motion for Default
    ],
    fees: {
      filing: 185,
      summons: 10,
      service: 40
    }
  },
  restrictions: {
    protectedClasses: [
      'familial_status',
      'disability',
      'race',
      'color',
      'national_origin',
      'religion',
      'sex'
    ],
    requiredDisclosures: [
      'security_deposit_rights',
      'mold_disclosure'
    ]
  }
}