// app/modules/accept_invite/native/AcceptInviteManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ACCEPT_INVITE_MODAL_KEY;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.InviteStates;
    var _closure1_slot11 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: AcceptInviteManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                option = _closure1_slot4;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                option = option.bind(tangon)(report, zuuluu);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot6;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot5;
                entity = _closure1_slot12;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 86; continue _fun00003 }
 73:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00004_ip = 120; continue _fun00003;
 86:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 120:
                entity = zuuluu.bind(tangon)(report, entity);
                var _closure3_slot0 = entity;
                zuuluu = false;
                entity['_isRegistration'] = zuuluu;
                zuuluu = {};
                tangon = function(argFoo) { // Original name: DISPLAYED_INVITE_SHOW
                    zuuluu = _closure3_slot0;
                    michal = zuuluu._handleShowInvite;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu['DISPLAYED_INVITE_SHOW'] = tangon;
                tangon = function() { // Original name: DISPLAYED_INVITE_CLEAR
                    michal = _closure3_slot0;
                    entity = michal._handleClearInvite;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['DISPLAYED_INVITE_CLEAR'] = tangon;
                tangon = function() { // Original name: DEFERRED_INVITE_SHOW
                    michal = _closure3_slot0;
                    entity = michal._handleShowDeferredInvite;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['DEFERRED_INVITE_SHOW'] = tangon;
                tangon = function() { // Original name: REGISTER_SUCCESS
                    michal = _closure3_slot0;
                    entity = michal._handleRegisterSuccess;
                    entity = entity.bind(michal)();
                    return entity;
                };
                zuuluu['REGISTER_SUCCESS'] = tangon;
                entity['actions'] = zuuluu;
                zuuluu = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        tangon = entity.code;
                        zuuluu = entity.deeplinkAttemptId;
                        michal = _closure1_slot8;
                        entity = michal.isAuthenticated;
                        entity = entity.bind(michal)();
                        michal = _closure3_slot0;
                        if(entity) { _fun00006_ip = 49; continue _fun00005 }
 41:
                        michal['_deferredCode'] = tangon;
                        _fun00006_ip = 61; continue _fun00005;
 49:
                        entity = michal._handleInvite;
                        entity = entity.bind(michal)(tangon, zuuluu);
 61:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['_handleShowInvite'] = zuuluu;
                zuuluu = function() {
                    michal = _closure3_slot0;
                    entity = null;
                    michal['_deferredCode'] = entity;
                    entity = false;
                    michal['_isRegistration'] = entity;
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 10;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.popWithKey;
                    michal = _closure1_slot10;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                entity['_handleClearInvite'] = zuuluu;
                zuuluu = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        michal = _closure3_slot0;
                        zuuluu = michal._deferredCode;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00008_ip = 46; continue _fun00007 }
 19:
                        entity = _closure3_slot0;
                        tangon = entity._handleInvite;
                        zuuluu = entity._deferredCode;
                        zuuluu = tangon.bind(entity)(zuuluu);
                        entity['_deferredCode'] = michal;
 46:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['_handleShowDeferredInvite'] = zuuluu;
                zuuluu = function(argFoo, argBar) {
                    michal = argFoo;
                    var _closure4_slot0 = michal;
                    michal = argBar;
                    var _closure4_slot1 = michal;
                    zuuluu = _closure1_slot9;
                    michal = zuuluu.addConditionalChangeListener;
                    entity = function() {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            tangon = _closure1_slot9;
                            zuuluu = tangon.getInvite;
                            entity = _closure4_slot0;
                            golfie = zuuluu.bind(tangon)(entity);
                            verify = null;
                            entity = verify == golfie;
                            if(entity) { _fun00010_ip = 122; continue _fun00009 }
 34:
                            tangon = golfie.state;
                            zuuluu = _closure1_slot11;
                            zuuluu = zuuluu.RESOLVED;
                            zuuluu = tangon !== zuuluu;
                            if(!zuuluu) { _fun00010_ip = 75; continue _fun00009 }
 56:
                            report = golfie.state;
                            tangon = _closure1_slot11;
                            tangon = tangon.EXPIRED;
                            zuuluu = report !== tangon;
 75:
                            if(!zuuluu) { _fun00010_ip = 97; continue _fun00009 }
 78:
                            report = golfie.state;
                            tangon = _closure1_slot11;
                            tangon = tangon.BANNED;
                            zuuluu = report !== tangon;
 97:
                            if(!zuuluu) { _fun00010_ip = 119; continue _fun00009 }
 100:
                            report = golfie.state;
                            tangon = _closure1_slot11;
                            tangon = tangon.ERROR;
                            zuuluu = report !== tangon;
 119:
                            entity = zuuluu;
 122:
                            if(entity) { _fun00010_ip = 400; continue _fun00009 }
 128:
                            zuuluu = golfie.channel;
                            if(!(verify == zuuluu)) { _fun00010_ip = 159; continue _fun00009 }
 137:
                            zuuluu = golfie.guild;
                            if(!(verify == zuuluu)) { _fun00010_ip = 159; continue _fun00009 }
 146:
                            zuuluu = golfie.inviter;
                            if(!(verify == zuuluu)) { _fun00010_ip = 295; continue _fun00009 }
 159:
                            romeon = _closure4_slot0;
                            zuuluu = _closure3_slot0;
                            yankee = zuuluu._isRegistration;
                            zuuluu = _closure4_slot1;
                            oscard = _closure1_slot1;
                            tangon = _closure1_slot2;
                            report = 9;
                            report = tangon[report];
                            backup = undefined;
                            offset = oscard.bind(backup)(report);
                            report = offset.hideActionSheet;
                            report = report.bind(offset)();
                            report = 10;
                            report = tangon[report];
                            offset = oscard.bind(backup)(report);
                            oscard = offset.pushLazy;
                            foxtra = _closure1_slot0;
                            report = 12;
                            report = tangon[report];
                            foxtra = foxtra.bind(backup)(report);
                            report = 11;
                            report = tangon[report];
                            tangon = tangon.paths;
                            report = foxtra.bind(backup)(report, tangon);
                            tangon = {};
                            tangon['code'] = romeon;
                            tangon['isRegistration'] = yankee;
                            tangon['deeplinkAttemptId'] = zuuluu;
                            zuuluu = _closure1_slot10;
                            zuuluu = oscard.bind(offset)(report, tangon, zuuluu);
                            entity = false;
                            _fun00010_ip = 400; continue _fun00009;
 295:
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            zuuluu = 13;
                            zuuluu = tangon[zuuluu];
                            tangon = undefined;
                            oscard = report.bind(tangon)(zuuluu);
                            report = oscard.acceptFriendInvite;
                            zuuluu = {};
                            option = _closure4_slot1;
                            verify = verify != option;
                            option = 'Accept Invite';
                            if(!verify) { _fun00010_ip = 348; continue _fun00009 }
 342:
                            option = 'Deep Link';
 348:
                            zuuluu['location'] = option;
                            zuuluu = report.bind(oscard)(golfie, zuuluu);
                            zuuluu = _closure1_slot1;
                            report = _closure1_slot2;
                            michal = 14;
                            michal = report[michal];
                            tangon = zuuluu.bind(tangon)(michal);
                            zuuluu = tangon.wait;
                            michal = function() {
                                zuuluu = _closure1_slot0;
                                michal = _closure1_slot2;
                                entity = 15;
                                michal = michal[entity];
                                entity = undefined;
                                michal = zuuluu.bind(entity)(michal);
                                entity = michal.clearDisplayedInvite;
                                entity = entity.bind(michal)();
                                return entity;
                            };
                            michal = zuuluu.bind(tangon)(michal);
                            entity = false;
 400:
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity['_handleInvite'] = zuuluu;
                michal = function() {
                    michal = _closure3_slot0;
                    entity = true;
                    michal['_isRegistration'] = entity;
                    entity = undefined;
                    return entity;
                };
                entity['_handleRegisterSuccess'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/accept_invite/native/AcceptInviteManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();