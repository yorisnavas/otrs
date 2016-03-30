// --
// Copyright (C) 2001-2016 OTRS AG, http://otrs.com/
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (AGPL). If you
// did not receive this file, see http://www.gnu.org/licenses/agpl.txt.
// --

"use strict";

var Core = Core || {};

Core.UnitTest = (function (Namespace) {

    QUnit.done(function () { //eslint-disable-line no-undef
        $('#qunit-testresult').addClass('complete');
    });

    return Namespace;
}(Core.UnitTest || {}));