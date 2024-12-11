class StateManager {
  constructor() {
    this.stateConfigs = new Map();
    this.loadStateConfigurations();
  }

  /**
   * Load all state configurations
   * @private
   */
  loadStateConfigurations() {
    // Dynamic loading of state configurations
    const states = ['CA', 'FL', 'TX']; // Add more states as needed
    states.forEach(state => {
      const config = require(`../../../config/states/${state}`);
      this.stateConfigs.set(state, config);
    });
  }

  /**
   * Get state-specific requirements
   * @param {string} state State code
   * @param {string} noticeType Type of notice
   * @returns {Object} State requirements
   */
  getStateRequirements(state, noticeType) {
    const config = this.stateConfigs.get(state);
    if (!config) {
      throw new Error(`Configuration for state ${state} not found`);
    }
    return config.notices[noticeType];
  }

  /**
   * Get state-specific court forms
   * @param {string} state State code
   * @returns {Object} Required court forms and fees
   */
  getCourtForms(state) {
    const config = this.stateConfigs.get(state);
    return config?.courtForms || {};
  }

  /**
   * Check state-specific restrictions
   * @param {string} state State code
   * @param {Object} details Case details
   * @returns {Object} Validation results
   */
  checkStateRestrictions(state, details) {
    const config = this.stateConfigs.get(state);
    const restrictions = config?.restrictions || {};
    
    return {
      valid: true, // Implement validation logic
      restrictions: restrictions,
      warnings: []
    };
  }
}

module.exports = StateManager;