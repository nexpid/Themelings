// app/modules/rpc/server/commands/providers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    michal = global;
    offset = michal.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    offset = golfie.bind(entity)(tangon);
    var _closure1_slot4 = offset;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    foxtra = tangon.RPC_AUTHENTICATED_SCOPE;
    yankee = tangon.RPC_SCOPE_CONFIG;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticsLocations;
    var _closure1_slot6 = golfie;
    golfie = tangon.ComponentActions;
    var _closure1_slot7 = golfie;
    tangon = tangon.PlatformTypes;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    romeon = tangon.AM_HARMONY_PRD_APPLICATION_ID;
    golfie = tangon.AM_HARMONY_STG_APPLICATION_ID;
    tangon = 5;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    tangon = verify.RPCCommands;
    verify = verify.RPCErrors;
    var _closure1_slot9 = verify;
    verify = michal.Set;
    michal = new Array(2);
    michal[0] = romeon;
    michal[1] = golfie;
    golfie = verify.prototype;
    golfie = Object.create(golfie, {constructor: {value: verify}});
    update = golfie;
    echoed = michal;
    michal = new update[verify](echoed, result);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot10 = michal;
    michal = {};
    verify = tangon.GET_PROVIDER_ACCESS_TOKEN;
    golfie = {};
    romeon = {};
    kiloes = yankee.ANY;
    backup = new Array(1);
    backup[0] = foxtra;
    romeon[kiloes] = backup;
    golfie['scope'] = romeon;
    romeon = function(argFoo) { // Original name: validation
        report = argFoo;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        entity = michal[entity];
        michal = undefined;
        entity = zuuluu.bind(michal)(entity);
        michal = entity.bind(michal)(report);
        entity = michal.required;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.keys;
        entity = {};
        tangon = report.string;
        oscard = tangon.bind(report)();
        tangon = oscard.required;
        tangon = tangon.bind(oscard)();
        entity['provider'] = tangon;
        tangon = report.string;
        tangon = tangon.bind(report)();
        entity['connection_redirect'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    golfie['validation'] = romeon;
    romeon = function(argFoo) { // Original name: handler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.socket;
            entity = entity.args;
            oscard = entity.provider;
            var _closure2_slot0 = oscard;
            entity = entity.connection_redirect;
            var _closure2_slot1 = entity;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            report = 7;
            verify = option[report];
            tangon = undefined;
            yankee = golfie.bind(tangon)(verify);
            offset = yankee.validatePostMessageTransport;
            verify = zuuluu.transport;
            verify = offset.bind(yankee)(verify);
            report = option[report];
            golfie = golfie.bind(tangon)(report);
            report = golfie.validateApplication;
            zuuluu = zuuluu.application;
            golfie = report.bind(golfie)(zuuluu);
            report = _closure1_slot1;
            zuuluu = 8;
            zuuluu = option[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.get;
            report = zuuluu.bind(report)(oscard);
            var _closure2_slot2 = report;
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00002_ip = 354; continue _fun00001 }
 143:
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.AMAZON_MUSIC;
            if(!(oscard === zuuluu)) { _fun00002_ip = 286; continue _fun00001 }
 160:
            report = _closure1_slot10;
            zuuluu = report.has;
            zuuluu = zuuluu.bind(report)(golfie);
            if(zuuluu) { _fun00002_ip = 245; continue _fun00001 }
 177:
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 9;
            zuuluu = golfie[zuuluu];
            option = report.bind(tangon)(zuuluu);
            golfie = {};
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.UNAUTHORIZED_FOR_APPLICATION;
            golfie['errorCode'] = zuuluu;
            zuuluu = option.prototype;
            report = Object.create(zuuluu, {constructor: {value: option}});
            romeon = 'Command not available for this application';
            backup = report;
            foxtra = golfie;
            zuuluu = new backup[option](foxtra, romeon, yankee);
            zuuluu = zuuluu instanceof Object ? zuuluu : report;
            throw zuuluu;
 245:
            zuuluu = global;
            report = zuuluu.Promise;
            michal = function() {
                tangon = _closure1_slot4;
                zuuluu = undefined;
                michal = function* (argFoo, argBar) {
                    michal = function(argFoo) { // Original name: handleConnectionsUpdate
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            michal = _closure2_slot2;
                            entity = null;
                            if(!(entity != michal)) { _fun00004_ip = 92; continue _fun00003 }
 13:
                            michal = argFoo;
                            tangon = michal.accounts;
                            if(!(entity == tangon)) { _fun00004_ip = 30; continue _fun00003 }
 26:
                            tangon = new Array(0);
 30:
                            zuuluu = tangon.find;
                            michal = function(argFoo) {
                                entity = argFoo;
                                michal = entity.type;
                                entity = _closure2_slot2;
                                entity = entity.type;
                                entity = michal === entity;
                                return entity;
                            };
                            michal = zuuluu.bind(tangon)(michal);
                            if(!(entity != michal)) { _fun00004_ip = 92; continue _fun00003 }
 54:
                            zuuluu = _closure3_slot0;
                            entity = {};
                            michal = michal.access_token;
                            entity['access_token'] = michal;
                            michal = undefined;
                            entity = zuuluu.bind(michal)(entity);
                            entity = _closure4_slot2;
                            entity = entity.bind(michal)();
 92:
                            entity = undefined;
                            return entity;
                        }
                    };
                    var _closure4_slot0 = michal;
                    michal = function() { // Original name: handleConnectionsCallbackError
                        zuuluu = _closure1_slot4;
                        report = _closure1_slot1;
                        tangon = _closure1_slot2;
                        entity = 9;
                        tangon = tangon[entity];
                        entity = undefined;
                        oscard = report.bind(entity)(tangon);
                        report = {};
                        michal = _closure1_slot9;
                        michal = michal.OAUTH2_ERROR;
                        report['errorCode'] = michal;
                        option = _closure2_slot0;
                        michal = global;
                        michal = michal.HermesInternal;
                        golfie = michal.concat;
                        tangon = 'OAuth2 setup for "';
                        michal = '" failed';
                        verify = golfie.bind(tangon)(option, michal);
                        tangon = oscard.prototype;
                        tangon = Object.create(tangon, {constructor: {value: oscard}});
                        yankee = tangon;
                        offset = report;
                        michal = new yankee[oscard](offset, verify, option);
                        michal = michal instanceof Object ? michal : tangon;
                        michal = zuuluu.bind(entity)(michal);
                        michal = _closure4_slot2;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    var _closure4_slot1 = michal;
                    michal = function() { // Original name: cleanupPromise
                        tangon = _closure1_slot1;
                        oscard = _closure1_slot2;
                        entity = 10;
                        michal = oscard[entity];
                        entity = undefined;
                        option = tangon.bind(entity)(michal);
                        golfie = option.unsubscribe;
                        report = _closure4_slot0;
                        tangon = 'USER_CONNECTIONS_UPDATE';
                        tangon = golfie.bind(option)(tangon, report);
                        report = _closure1_slot0;
                        tangon = 11;
                        tangon = oscard[tangon];
                        tangon = report.bind(entity)(tangon);
                        report = tangon.ComponentDispatch;
                        tangon = report.unsubscribe;
                        zuuluu = _closure1_slot7;
                        zuuluu = zuuluu.CONNECTIONS_CALLBACK_ERROR;
                        michal = _closure4_slot1;
                        michal = tangon.bind(report)(zuuluu, michal);
                        return entity;
                    };
                    var _closure4_slot2 = michal;
                    entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            StartGenerator();
                            report = argFoo;
                            michal = argBar;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=7);
                            if(option) { _fun00006_ip = 414; continue _fun00005 }
 18:
                            golfie = report;
                            var _closure5_slot0 = report;
                            zuuluu = michal;
                            var _closure5_slot1 = michal;
                            michal = undefined;
                            tangon = undefined;
                            verify = undefined;
                            yankee = function(argFoo) { // Original name: handleConnectionsUpdate
                                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                    michal = _closure2_slot2;
                                    entity = null;
                                    if(!(entity != michal)) { _fun00008_ip = 89; continue _fun00007 }
 13:
                                    michal = argFoo;
                                    tangon = michal.accounts;
                                    if(!(entity == tangon)) { _fun00008_ip = 30; continue _fun00007 }
 26:
                                    tangon = new Array(0);
 30:
                                    zuuluu = tangon.find;
                                    michal = function(argFoo) {
                                        entity = argFoo;
                                        michal = entity.type;
                                        entity = _closure2_slot2;
                                        entity = entity.type;
                                        entity = michal === entity;
                                        return entity;
                                    };
                                    michal = zuuluu.bind(tangon)(michal);
                                    if(!(entity != michal)) { _fun00008_ip = 89; continue _fun00007 }
 54:
                                    tangon = _closure5_slot0;
                                    zuuluu = {};
                                    michal = michal.access_token;
                                    zuuluu['access_token'] = michal;
                                    michal = undefined;
                                    zuuluu = tangon.bind(michal)(zuuluu);
                                    entity = _closure5_slot4;
                                    entity = entity.bind(michal)();
 89:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            var _closure5_slot2 = yankee;
                            offset = function() { // Original name: handleConnectionsCallbackError
                                tangon = _closure5_slot1;
                                oscard = _closure1_slot1;
                                report = _closure1_slot2;
                                entity = 9;
                                report = report[entity];
                                entity = undefined;
                                golfie = oscard.bind(entity)(report);
                                oscard = {};
                                zuuluu = _closure1_slot9;
                                zuuluu = zuuluu.OAUTH2_ERROR;
                                oscard['errorCode'] = zuuluu;
                                verify = _closure2_slot0;
                                zuuluu = global;
                                zuuluu = zuuluu.HermesInternal;
                                option = zuuluu.concat;
                                report = 'OAuth2 setup for "';
                                zuuluu = '" failed';
                                offset = option.bind(report)(verify, zuuluu);
                                report = golfie.prototype;
                                report = Object.create(report, {constructor: {value: golfie}});
                                romeon = report;
                                yankee = oscard;
                                zuuluu = new romeon[golfie](yankee, offset, verify);
                                zuuluu = zuuluu instanceof Object ? zuuluu : report;
                                zuuluu = tangon.bind(entity)(zuuluu);
                                michal = _closure5_slot4;
                                michal = michal.bind(entity)();
                                return entity;
                            };
                            var _closure5_slot3 = offset;
                            report = function() { // Original name: cleanupPromise
                                tangon = _closure1_slot1;
                                oscard = _closure1_slot2;
                                entity = 10;
                                michal = oscard[entity];
                                entity = undefined;
                                option = tangon.bind(entity)(michal);
                                golfie = option.unsubscribe;
                                report = _closure5_slot2;
                                tangon = 'USER_CONNECTIONS_UPDATE';
                                tangon = golfie.bind(option)(tangon, report);
                                report = _closure1_slot0;
                                tangon = 11;
                                tangon = oscard[tangon];
                                tangon = report.bind(entity)(tangon);
                                report = tangon.ComponentDispatch;
                                tangon = report.unsubscribe;
                                zuuluu = _closure1_slot7;
                                zuuluu = zuuluu.CONNECTIONS_CALLBACK_ERROR;
                                michal = _closure5_slot3;
                                michal = tangon.bind(report)(zuuluu, michal);
                                return entity;
                            };
                            var _closure5_slot4 = report;
                            backup = _closure1_slot5;
                            foxtra = backup.getAccount;
                            romeon = _closure2_slot0;
                            option = null;
                            romeon = foxtra.bind(backup)(option, romeon);
                            tangon = romeon;
                            if(!(option != romeon)) { _fun00006_ip = 275; continue _fun00005 }
 109: // try_start_0
                            foxtra = _closure1_slot1;
                            backup = _closure1_slot2;
                            romeon = 13;
                            romeon = backup[romeon];
                            backup = foxtra.bind(michal)(romeon);
                            foxtra = backup.refreshAccessToken;
                            romeon = _closure2_slot2;
                            romeon = romeon.type;
                            tangon = tangon.id;
                            tangon = foxtra.bind(backup)(romeon, tangon);
                            SaveGenerator(address=159);
 157:
                            return tangon;
 159:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=11);
                            if(romeon) { _fun00006_ip = 260; continue _fun00005 }
 165:
                            verify = tangon;
                            if(!(option != tangon)) { _fun00006_ip = 192; continue _fun00005 }
 172:
                            option = golfie;
                            golfie = {};
                            golfie['access_token'] = verify;
                            golfie = option.bind(michal)(golfie);
 187: // try_end0
                            _fun00006_ip = 411; continue _fun00005;
 192: // try_start_1
                            option = _closure1_slot1;
                            verify = _closure1_slot2;
                            golfie = 9;
                            golfie = verify[golfie];
                            romeon = option.bind(michal)(golfie);
                            verify = {};
                            golfie = _closure1_slot9;
                            golfie = golfie.OAUTH2_ERROR;
                            verify['errorCode'] = golfie;
                            golfie = romeon.prototype;
                            option = Object.create(golfie, {constructor: {value: romeon}});
                            kiloes = 'Refreshing access token did not return a new access token';
                            output = option;
                            sizing = verify;
                            golfie = new output[romeon](sizing, kiloes, backup);
                            golfie = golfie instanceof Object ? golfie : option;
                            throw golfie;
 260: // try_end1
                            return tangon;
 263: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=3);
                            zuuluu = zuuluu.bind(michal)(tangon);
                            _fun00006_ip = 411; continue _fun00005;
 275:
                            tangon = _closure1_slot1;
                            golfie = _closure1_slot2;
                            zuuluu = 10;
                            zuuluu = golfie[zuuluu];
                            verify = tangon.bind(michal)(zuuluu);
                            option = verify.subscribe;
                            zuuluu = 'USER_CONNECTIONS_UPDATE';
                            zuuluu = option.bind(verify)(zuuluu, yankee);
                            option = _closure1_slot0;
                            zuuluu = 11;
                            zuuluu = golfie[zuuluu];
                            zuuluu = option.bind(michal)(zuuluu);
                            verify = zuuluu.ComponentDispatch;
                            option = verify.subscribe;
                            zuuluu = _closure1_slot7;
                            zuuluu = zuuluu.CONNECTIONS_CALLBACK_ERROR;
                            zuuluu = option.bind(verify)(zuuluu, offset);
                            zuuluu = 12;
                            zuuluu = golfie[zuuluu];
                            tangon = tangon.bind(michal)(zuuluu);
                            zuuluu = {};
                            golfie = _closure2_slot2;
                            golfie = golfie.type;
                            zuuluu['platformType'] = golfie;
                            oscard = _closure1_slot6;
                            oscard = oscard.ACTIVITY_RPC;
                            zuuluu['location'] = oscard;
                            report = _closure2_slot1;
                            zuuluu['successRedirect'] = report;
                            zuuluu = tangon.bind(michal)(zuuluu);
 411:
                            return michal;
 414:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            foxtra = michal.bind(tangon)();
            zuuluu = report.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: report}});
            backup = zuuluu;
            michal = new backup[report](foxtra, romeon);
            michal = michal instanceof Object ? michal : zuuluu;
            return michal;
 286:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 9;
            michal = report[michal];
            golfie = zuuluu.bind(tangon)(michal);
            report = {};
            michal = _closure1_slot9;
            michal = michal.UNAUTHORIZED_FOR_APPLICATION;
            report['errorCode'] = michal;
            michal = golfie.prototype;
            zuuluu = Object.create(michal, {constructor: {value: golfie}});
            romeon = 'Command not available for this application';
            backup = zuuluu;
            foxtra = report;
            michal = new backup[golfie](foxtra, romeon, yankee);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 354:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 9;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = {};
            entity = _closure1_slot9;
            entity = entity.INVALID_PROVIDER;
            zuuluu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            michal = 'Platform not found for provider "';
            entity = '"';
            romeon = report.bind(michal)(oscard, entity);
            michal = tangon.prototype;
            michal = Object.create(michal, {constructor: {value: tangon}});
            backup = michal;
            foxtra = zuuluu;
            entity = new backup[tangon](foxtra, romeon, yankee);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    golfie['handler'] = romeon;
    michal[verify] = golfie;
    golfie = tangon.MAYBE_GET_PROVIDER_ACCESS_TOKEN;
    tangon = {};
    verify = {};
    romeon = yankee.ANY;
    yankee = new Array(1);
    yankee[0] = foxtra;
    verify[romeon] = yankee;
    tangon['scope'] = verify;
    verify = function(argFoo) { // Original name: validation
        report = argFoo;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 6;
        entity = michal[entity];
        michal = undefined;
        entity = zuuluu.bind(michal)(entity);
        michal = entity.bind(michal)(report);
        entity = michal.required;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.keys;
        entity = {};
        tangon = report.string;
        report = tangon.bind(report)();
        tangon = report.required;
        tangon = tangon.bind(report)();
        entity['provider'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['validation'] = verify;
    verify = function* (argFoo) {
        entity = function* (argFoo) { // Original name: ?anon_0_
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                StartGenerator();
                michal = argFoo;
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                if(zuuluu) { _fun00010_ip = 638; continue _fun00009 }
 13:
                tangon = michal.socket;
                michal = michal.args;
                option = michal.provider;
                oscard = undefined;
                SaveGenerator(address=37);
 35:
                return oscard;
 37:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                if(zuuluu) { _fun00010_ip = 635; continue _fun00009 }
 46:
                verify = _closure1_slot0;
                golfie = _closure1_slot2;
                report = 7;
                offset = golfie[report];
                romeon = verify.bind(oscard)(offset);
                yankee = romeon.validatePostMessageTransport;
                offset = tangon.transport;
                offset = yankee.bind(romeon)(offset);
                report = golfie[report];
                verify = verify.bind(oscard)(report);
                report = verify.validateApplication;
                tangon = tangon.application;
                offset = report.bind(verify)(tangon);
                report = _closure1_slot1;
                tangon = 8;
                tangon = golfie[tangon];
                report = report.bind(oscard)(tangon);
                tangon = report.get;
                golfie = tangon.bind(report)(option);
                report = null;
                if(!(report != golfie)) { _fun00010_ip = 544; continue _fun00009 }
 146:
                tangon = _closure1_slot8;
                tangon = tangon.AMAZON_MUSIC;
                if(!(option === tangon)) { _fun00010_ip = 476; continue _fun00009 }
 163:
                verify = _closure1_slot10;
                tangon = verify.has;
                tangon = tangon.bind(verify)(offset);
                if(tangon) { _fun00010_ip = 248; continue _fun00009 }
 180:
                verify = _closure1_slot1;
                offset = _closure1_slot2;
                tangon = 9;
                tangon = offset[tangon];
                yankee = verify.bind(oscard)(tangon);
                offset = {};
                tangon = _closure1_slot9;
                tangon = tangon.UNAUTHORIZED_FOR_APPLICATION;
                offset['errorCode'] = tangon;
                tangon = yankee.prototype;
                verify = Object.create(tangon, {constructor: {value: yankee}});
                foxtra = 'Command not available for this application';
                kiloes = verify;
                backup = offset;
                tangon = new kiloes[yankee](backup, foxtra, romeon);
                tangon = tangon instanceof Object ? tangon : verify;
                throw tangon;
 248:
                verify = _closure1_slot5;
                tangon = verify.getAccount;
                tangon = tangon.bind(verify)(report, option);
                if(!(report != tangon)) { _fun00010_ip = 408; continue _fun00009 }
 271:
                offset = _closure1_slot1;
                yankee = _closure1_slot2;
                verify = 13;
                verify = yankee[verify];
                offset = offset.bind(oscard)(verify);
                verify = offset.refreshAccessToken;
                golfie = golfie.type;
                tangon = tangon.id;
                tangon = verify.bind(offset)(golfie, tangon);
                SaveGenerator(address=317);
 315:
                return tangon;
 317:
                ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                if(golfie) { _fun00010_ip = 405; continue _fun00009 }
 323:
                if(!(report != tangon)) { _fun00010_ip = 337; continue _fun00009 }
 327:
                report = {};
                report['access_token'] = tangon;
                return report;
 337:
                golfie = _closure1_slot1;
                verify = _closure1_slot2;
                report = 9;
                report = verify[report];
                offset = golfie.bind(oscard)(report);
                verify = {};
                report = _closure1_slot9;
                report = report.OAUTH2_ERROR;
                verify['errorCode'] = report;
                report = offset.prototype;
                golfie = Object.create(report, {constructor: {value: offset}});
                foxtra = 'Refreshing access token did not return a new access token';
                kiloes = golfie;
                backup = verify;
                report = new kiloes[offset](backup, foxtra, romeon);
                report = report instanceof Object ? report : golfie;
                throw report;
 405:
                return tangon;
 408:
                report = _closure1_slot1;
                golfie = _closure1_slot2;
                tangon = 9;
                tangon = golfie[tangon];
                verify = report.bind(oscard)(tangon);
                golfie = {};
                tangon = _closure1_slot9;
                tangon = tangon.NO_CONNECTION_FOUND;
                golfie['errorCode'] = tangon;
                tangon = verify.prototype;
                report = Object.create(tangon, {constructor: {value: verify}});
                foxtra = 'No connection found';
                kiloes = report;
                backup = golfie;
                tangon = new kiloes[verify](backup, foxtra, romeon);
                tangon = tangon instanceof Object ? tangon : report;
                throw tangon;
 476:
                report = _closure1_slot1;
                golfie = _closure1_slot2;
                tangon = 9;
                tangon = golfie[tangon];
                verify = report.bind(oscard)(tangon);
                golfie = {};
                tangon = _closure1_slot9;
                tangon = tangon.UNAUTHORIZED_FOR_APPLICATION;
                golfie['errorCode'] = tangon;
                tangon = verify.prototype;
                report = Object.create(tangon, {constructor: {value: verify}});
                foxtra = 'Command not available for this application';
                kiloes = report;
                backup = golfie;
                tangon = new kiloes[verify](backup, foxtra, romeon);
                tangon = tangon instanceof Object ? tangon : report;
                throw tangon;
 544:
                report = _closure1_slot1;
                golfie = _closure1_slot2;
                tangon = 9;
                tangon = golfie[tangon];
                oscard = report.bind(oscard)(tangon);
                report = {};
                zuuluu = _closure1_slot9;
                zuuluu = zuuluu.INVALID_PROVIDER;
                report['errorCode'] = zuuluu;
                zuuluu = global;
                zuuluu = zuuluu.HermesInternal;
                golfie = zuuluu.concat;
                tangon = 'Platform not found for provider "';
                zuuluu = '"';
                foxtra = golfie.bind(tangon)(option, zuuluu);
                tangon = oscard.prototype;
                tangon = Object.create(tangon, {constructor: {value: oscard}});
                kiloes = tangon;
                backup = report;
                zuuluu = new kiloes[oscard](backup, foxtra, romeon);
                zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                throw zuuluu;
 635:
                return michal;
 638:
                return entity;
            }
        };
        michal = entity.next;
        michal = michal.bind(entity)();
        return entity;
    };
    verify = offset.bind(entity)(verify);
    var _closure1_slot3 = verify;
    option = function() {
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    tangon['handler'] = option;
    michal[golfie] = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/commands/providers.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();