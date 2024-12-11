module.exports = `
NOTICE TO PAY RENT OR QUIT

TO: {{tenantName}}
Address: {{propertyAddress}}

WITHIN THREE (3) DAYS after service upon you of this notice, you are hereby required to:

1. Pay the past due rent of ${{rentAmount}} for the period of {{rentPeriod}}
OR
2. Vacate and deliver possession of the above-described premises.

This amount represents rent due for the following period(s):
{{rentDetails}}

Payment must be made to:
{{landlordInfo}}

Payment may be made by the following methods:
{{paymentMethods}}

If you fail to either pay the total rent due or vacate the premises by the expiration of the three-day period, legal proceedings will be instituted against you to recover possession of the premises and to recover all rent due, plus costs and attorney fees as allowed by law.

This notice is provided in accordance with California Civil Code Section 1161.

Date: {{currentDate}}

___________________________
{{landlordName}}
Landlord/Agent
`;