// src/pages/EditRedirectPage.js

import React from 'react';
import RedirectForm from '../components/RedirectForm';

function EditRedirectPage({ existingRedirect }) {
    return (
        <div>
            <RedirectForm existingRedirect={existingRedirect} />
        </div>
    );
}

export default EditRedirectPage;