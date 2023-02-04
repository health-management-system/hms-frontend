import React from "react";
import AddRecordPanel from '../src/components/Add_Record_Panel'

describe('Tests for the Add Record Panel', () => {
    it('Renders', () => {
        cy.mount(<AddRecordPanel />)
    })
})