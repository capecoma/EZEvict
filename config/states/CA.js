module.exports = {
  notices: {
    '3Day': {
      name: 'Three-Day Notice to Pay Rent or Quit',
      requirements: {
        minimumNoticePeriod: 3,
        serviceMethods: [
          'personal',
          'substitute',
          'post_and_mail'
        ],
        requiredContent: [
          'tenant_name',
          'property_address',
          'rent_amount',
          'rent_period',
          'landlord_info'
        ]
      },
      timeline: {
        responseDeadline: 3,
        courtFilingEligible: 4,
        defaultJudgmentEligible: 8
      }
    },
    '30Day': {
      name: 'Thirty-Day Notice to Terminate Tenancy',
      requirements: {
        minimumNoticePeriod: 30,
        applicableTo: 'month_to_month_under_1_year',
        serviceMethods: [
          'personal',
          'substitute',
          'post_and_mail'
        ]
      }
    },
    '60Day': {
      name: 'Sixty-Day Notice to Terminate Tenancy',
      requirements: {
        minimumNoticePeriod: 60,
        applicableTo: 'month_to_month_over_1_year',
        serviceMethods: [
          'personal',
          'substitute',
          'post_and_mail'
        ]
      }
    }
  },
  restrictions: {
    protectedPeriods: [
      'declared_state_of_emergency',
      'local_moratorium'
    ],
    requiredDisclosures: [
      'just_cause_requirement',
      'rent_control_notice',
      'tenant_rights'
    ]
  }
};