// app/modules/accept_invite/native/AcceptInviteManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun122980: for(var _fun122980_ip = 0; ; ) switch(_fun122980_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot13;
            entity = entity.bind(zulu)();
            if(entity) { _fun122980_ip = 51; continue _fun122980 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun122980_ip = 92; continue _fun122980;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun122980_ip = 71; continue _fun122980 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun122981: for(var _fun122981_ip = 0; ; ) switch(_fun122981_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun122981_ip = 76; continue _fun122981;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ACCEPT_INVITE_MODAL_KEY;
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.InviteStates;
    var _closure1_slot11 = tango;
    tango = 16;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: AcceptInviteManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            zulu = _closure1_slot4;
            report = _closure2_slot0;
            tango = undefined;
            zulu = zulu.bind(tango)(oscar, report);
            zulu = _closure1_slot12;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            var _closure3_slot0 = entity;
            zulu = false;
            entity['_isRegistration'] = zulu;
            zulu = {};
            tango = function(argFoo) { // Original name: DISPLAYED_INVITE_SHOW
                zulu = _closure3_slot0;
                mike = zulu._handleShowInvite;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['DISPLAYED_INVITE_SHOW'] = tango;
            tango = function() { // Original name: DISPLAYED_INVITE_CLEAR
                mike = _closure3_slot0;
                entity = mike._handleClearInvite;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['DISPLAYED_INVITE_CLEAR'] = tango;
            tango = function() { // Original name: DEFERRED_INVITE_SHOW
                mike = _closure3_slot0;
                entity = mike._handleShowDeferredInvite;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['DEFERRED_INVITE_SHOW'] = tango;
            tango = function() { // Original name: REGISTER_SUCCESS
                mike = _closure3_slot0;
                entity = mike._handleRegisterSuccess;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu['REGISTER_SUCCESS'] = tango;
            entity['actions'] = zulu;
            zulu = function(argFoo) {
                _fun122990: for(var _fun122990_ip = 0; ; ) switch(_fun122990_ip) {
 0:
                    entity = argFoo;
                    tango = entity.code;
                    zulu = entity.deeplinkAttemptId;
                    mike = _closure1_slot8;
                    entity = mike.isAuthenticated;
                    entity = entity.bind(mike)();
                    mike = _closure3_slot0;
                    if(entity) { _fun122990_ip = 49; continue _fun122990 }
 41:
                    mike['_deferredCode'] = tango;
                    _fun122990_ip = 61; continue _fun122990;
 49:
                    entity = mike._handleInvite;
                    entity = entity.bind(mike)(tango, zulu);
 61:
                    entity = undefined;
                    return entity;
                }
            };
            entity['_handleShowInvite'] = zulu;
            zulu = function() {
                mike = _closure3_slot0;
                entity = null;
                mike['_deferredCode'] = entity;
                entity = false;
                mike['_isRegistration'] = entity;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 10;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.popWithKey;
                mike = _closure1_slot10;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['_handleClearInvite'] = zulu;
            zulu = function() {
                _fun122992: for(var _fun122992_ip = 0; ; ) switch(_fun122992_ip) {
 0:
                    mike = _closure3_slot0;
                    zulu = mike._deferredCode;
                    mike = null;
                    if(!(mike != zulu)) { _fun122992_ip = 46; continue _fun122992 }
 19:
                    entity = _closure3_slot0;
                    tango = entity._handleInvite;
                    zulu = entity._deferredCode;
                    zulu = tango.bind(entity)(zulu);
                    entity['_deferredCode'] = mike;
 46:
                    entity = undefined;
                    return entity;
                }
            };
            entity['_handleShowDeferredInvite'] = zulu;
            zulu = function(argFoo, argBar) {
                mike = argFoo;
                var _closure4_slot0 = mike;
                mike = argBar;
                var _closure4_slot1 = mike;
                zulu = _closure1_slot9;
                mike = zulu.addConditionalChangeListener;
                entity = function() {
                    _fun122994: for(var _fun122994_ip = 0; ; ) switch(_fun122994_ip) {
 0:
                        tango = _closure1_slot9;
                        zulu = tango.getInvite;
                        entity = _closure4_slot0;
                        golf = zulu.bind(tango)(entity);
                        verify = null;
                        entity = verify == golf;
                        if(entity) { _fun122994_ip = 122; continue _fun122994 }
 34:
                        tango = golf.state;
                        zulu = _closure1_slot11;
                        zulu = zulu.RESOLVED;
                        zulu = tango !== zulu;
                        if(!zulu) { _fun122994_ip = 75; continue _fun122994 }
 56:
                        report = golf.state;
                        tango = _closure1_slot11;
                        tango = tango.EXPIRED;
                        zulu = report !== tango;
 75:
                        if(!zulu) { _fun122994_ip = 97; continue _fun122994 }
 78:
                        report = golf.state;
                        tango = _closure1_slot11;
                        tango = tango.BANNED;
                        zulu = report !== tango;
 97:
                        if(!zulu) { _fun122994_ip = 119; continue _fun122994 }
 100:
                        report = golf.state;
                        tango = _closure1_slot11;
                        tango = tango.ERROR;
                        zulu = report !== tango;
 119:
                        entity = zulu;
 122:
                        if(entity) { _fun122994_ip = 400; continue _fun122994 }
 128:
                        zulu = golf.channel;
                        if(!(verify == zulu)) { _fun122994_ip = 159; continue _fun122994 }
 137:
                        zulu = golf.guild;
                        if(!(verify == zulu)) { _fun122994_ip = 159; continue _fun122994 }
 146:
                        zulu = golf.inviter;
                        if(!(verify == zulu)) { _fun122994_ip = 295; continue _fun122994 }
 159:
                        romeo = _closure4_slot0;
                        zulu = _closure3_slot0;
                        yankee = zulu._isRegistration;
                        zulu = _closure4_slot1;
                        oscar = _closure1_slot1;
                        tango = _closure1_slot2;
                        report = 9;
                        report = tango[report];
                        backup = undefined;
                        offset = oscar.bind(backup)(report);
                        report = offset.hideActionSheet;
                        report = report.bind(offset)();
                        report = 10;
                        report = tango[report];
                        offset = oscar.bind(backup)(report);
                        oscar = offset.pushLazy;
                        foxtrot = _closure1_slot0;
                        report = 12;
                        report = tango[report];
                        foxtrot = foxtrot.bind(backup)(report);
                        report = 11;
                        report = tango[report];
                        tango = tango.paths;
                        report = foxtrot.bind(backup)(report, tango);
                        tango = {};
                        tango['code'] = romeo;
                        tango['isRegistration'] = yankee;
                        tango['deeplinkAttemptId'] = zulu;
                        zulu = _closure1_slot10;
                        zulu = oscar.bind(offset)(report, tango, zulu);
                        entity = false;
                        _fun122994_ip = 400; continue _fun122994;
 295:
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        zulu = 13;
                        zulu = tango[zulu];
                        tango = undefined;
                        oscar = report.bind(tango)(zulu);
                        report = oscar.acceptFriendInvite;
                        zulu = {};
                        options = _closure4_slot1;
                        verify = verify != options;
                        options = 'Accept Invite';
                        if(!verify) { _fun122994_ip = 348; continue _fun122994 }
 342:
                        options = 'Deep Link';
 348:
                        zulu['location'] = options;
                        zulu = report.bind(oscar)(golf, zulu);
                        zulu = _closure1_slot1;
                        report = _closure1_slot2;
                        mike = 14;
                        mike = report[mike];
                        tango = zulu.bind(tango)(mike);
                        zulu = tango.wait;
                        mike = function() {
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 15;
                            mike = mike[entity];
                            entity = undefined;
                            mike = zulu.bind(entity)(mike);
                            entity = mike.clearDisplayedInvite;
                            entity = entity.bind(mike)();
                            return entity;
                        };
                        mike = zulu.bind(tango)(mike);
                        entity = false;
 400:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity['_handleInvite'] = zulu;
            mike = function() {
                mike = _closure3_slot0;
                entity = true;
                mike['_isRegistration'] = entity;
                entity = undefined;
                return entity;
            };
            entity['_handleRegisterSuccess'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot3;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/accept_invite/native/AcceptInviteManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();