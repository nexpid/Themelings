// app/modules/rpc/server/commands/providers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    mike = global;
    offset = mike.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    offset = golf.bind(entity)(tango);
    var _closure1_slot4 = offset;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    foxtrot = tango.RPC_AUTHENTICATED_SCOPE;
    yankee = tango.RPC_SCOPE_CONFIG;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticsLocations;
    var _closure1_slot6 = golf;
    golf = tango.ComponentActions;
    var _closure1_slot7 = golf;
    tango = tango.PlatformTypes;
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    romeo = tango.AM_HARMONY_PRD_APPLICATION_ID;
    golf = tango.AM_HARMONY_STG_APPLICATION_ID;
    tango = 5;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    tango = verify.RPCCommands;
    verify = verify.RPCErrors;
    var _closure1_slot9 = verify;
    verify = mike.Set;
    mike = new Array(2);
    mike[0] = romeo;
    mike[1] = golf;
    golf = verify.prototype;
    golf = Object.create(golf, {constructor: {value: verify}});
    update = golf;
    echo = mike;
    mike = new update[verify](echo, result);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot10 = mike;
    mike = {};
    verify = tango.GET_PROVIDER_ACCESS_TOKEN;
    golf = {};
    romeo = {};
    kilo = yankee.ANY;
    backup = new Array(1);
    backup[0] = foxtrot;
    romeo[kilo] = backup;
    golf['scope'] = romeo;
    romeo = function(argFoo) { // Original name: validation
        report = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 6;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        mike = entity.bind(mike)(report);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        oscar = tango.bind(report)();
        tango = oscar.required;
        tango = tango.bind(oscar)();
        entity['provider'] = tango;
        tango = report.string;
        tango = tango.bind(report)();
        entity['connection_redirect'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    golf['validation'] = romeo;
    romeo = function(argFoo) { // Original name: handler
        _fun109649: for(var _fun109649_ip = 0; ; ) switch(_fun109649_ip) {
 0:
            entity = argFoo;
            zulu = entity.socket;
            entity = entity.args;
            oscar = entity.provider;
            var _closure2_slot0 = oscar;
            entity = entity.connection_redirect;
            var _closure2_slot1 = entity;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            report = 7;
            verify = options[report];
            tango = undefined;
            yankee = golf.bind(tango)(verify);
            offset = yankee.validatePostMessageTransport;
            verify = zulu.transport;
            verify = offset.bind(yankee)(verify);
            report = options[report];
            golf = golf.bind(tango)(report);
            report = golf.validateApplication;
            zulu = zulu.application;
            golf = report.bind(golf)(zulu);
            report = _closure1_slot1;
            zulu = 8;
            zulu = options[zulu];
            report = report.bind(tango)(zulu);
            zulu = report.get;
            report = zulu.bind(report)(oscar);
            var _closure2_slot2 = report;
            zulu = null;
            if(!(zulu != report)) { _fun109649_ip = 354; continue _fun109649 }
 143:
            zulu = _closure1_slot8;
            zulu = zulu.AMAZON_MUSIC;
            if(!(oscar === zulu)) { _fun109649_ip = 286; continue _fun109649 }
 160:
            report = _closure1_slot10;
            zulu = report.has;
            zulu = zulu.bind(report)(golf);
            if(zulu) { _fun109649_ip = 245; continue _fun109649 }
 177:
            report = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 9;
            zulu = golf[zulu];
            options = report.bind(tango)(zulu);
            golf = {};
            zulu = _closure1_slot9;
            zulu = zulu.UNAUTHORIZED_FOR_APPLICATION;
            golf['errorCode'] = zulu;
            zulu = options.prototype;
            report = Object.create(zulu, {constructor: {value: options}});
            romeo = 'Command not available for this application';
            backup = report;
            foxtrot = golf;
            zulu = new backup[options](foxtrot, romeo, yankee);
            zulu = zulu instanceof Object ? zulu : report;
            throw zulu;
 245:
            zulu = global;
            report = zulu.Promise;
            mike = function() {
                tango = _closure1_slot4;
                zulu = undefined;
                mike = function* (argFoo, argBar) {
                    mike = function(argFoo) { // Original name: handleConnectionsUpdate
                        _fun109657: for(var _fun109657_ip = 0; ; ) switch(_fun109657_ip) {
 0:
                            mike = _closure2_slot2;
                            entity = null;
                            if(!(entity != mike)) { _fun109657_ip = 91; continue _fun109657 }
 13:
                            mike = argFoo;
                            tango = mike.accounts;
                            if(!(entity == tango)) { _fun109657_ip = 30; continue _fun109657 }
 26:
                            tango = new Array(0);
 30:
                            zulu = tango.find;
                            mike = function(argFoo) {
                                entity = argFoo;
                                mike = entity.type;
                                entity = _closure2_slot2;
                                entity = entity.type;
                                entity = mike === entity;
                                return entity;
                            };
                            mike = zulu.bind(tango)(mike);
                            if(!(entity != mike)) { _fun109657_ip = 91; continue _fun109657 }
 53:
                            zulu = _closure3_slot0;
                            entity = {};
                            mike = mike.access_token;
                            entity['access_token'] = mike;
                            mike = undefined;
                            entity = zulu.bind(mike)(entity);
                            entity = _closure4_slot2;
                            entity = entity.bind(mike)();
 91:
                            entity = undefined;
                            return entity;
                        }
                    };
                    var _closure4_slot0 = mike;
                    mike = function() { // Original name: handleConnectionsCallbackError
                        zulu = _closure1_slot4;
                        report = _closure1_slot1;
                        tango = _closure1_slot2;
                        entity = 9;
                        tango = tango[entity];
                        entity = undefined;
                        oscar = report.bind(entity)(tango);
                        report = {};
                        mike = _closure1_slot9;
                        mike = mike.OAUTH2_ERROR;
                        report['errorCode'] = mike;
                        options = _closure2_slot0;
                        mike = global;
                        mike = mike.HermesInternal;
                        golf = mike.concat;
                        tango = 'OAuth2 setup for "';
                        mike = '" failed';
                        verify = golf.bind(tango)(options, mike);
                        tango = oscar.prototype;
                        tango = Object.create(tango, {constructor: {value: oscar}});
                        yankee = tango;
                        offset = report;
                        mike = new yankee[oscar](offset, verify, options);
                        mike = mike instanceof Object ? mike : tango;
                        mike = zulu.bind(entity)(mike);
                        mike = _closure4_slot2;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    var _closure4_slot1 = mike;
                    mike = function() { // Original name: cleanupPromise
                        tango = _closure1_slot1;
                        oscar = _closure1_slot2;
                        entity = 10;
                        mike = oscar[entity];
                        entity = undefined;
                        options = tango.bind(entity)(mike);
                        golf = options.unsubscribe;
                        report = _closure4_slot0;
                        tango = 'USER_CONNECTIONS_UPDATE';
                        tango = golf.bind(options)(tango, report);
                        report = _closure1_slot0;
                        tango = 11;
                        tango = oscar[tango];
                        tango = report.bind(entity)(tango);
                        report = tango.ComponentDispatch;
                        tango = report.unsubscribe;
                        zulu = _closure1_slot7;
                        zulu = zulu.CONNECTIONS_CALLBACK_ERROR;
                        mike = _closure4_slot1;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    var _closure4_slot2 = mike;
                    entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                        _fun109652: for(var _fun109652_ip = 0; ; ) switch(_fun109652_ip) {
 0:
                            StartGenerator();
                            report = argFoo;
                            mike = argBar;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=7);
                            if(options) { _fun109652_ip = 414; continue _fun109652 }
 18:
                            golf = report;
                            var _closure5_slot0 = report;
                            zulu = mike;
                            var _closure5_slot1 = mike;
                            mike = undefined;
                            tango = undefined;
                            verify = undefined;
                            yankee = function(argFoo) { // Original name: handleConnectionsUpdate
                                _fun109653: for(var _fun109653_ip = 0; ; ) switch(_fun109653_ip) {
 0:
                                    mike = _closure2_slot2;
                                    entity = null;
                                    if(!(entity != mike)) { _fun109653_ip = 88; continue _fun109653 }
 13:
                                    mike = argFoo;
                                    tango = mike.accounts;
                                    if(!(entity == tango)) { _fun109653_ip = 30; continue _fun109653 }
 26:
                                    tango = new Array(0);
 30:
                                    zulu = tango.find;
                                    mike = function(argFoo) {
                                        entity = argFoo;
                                        mike = entity.type;
                                        entity = _closure2_slot2;
                                        entity = entity.type;
                                        entity = mike === entity;
                                        return entity;
                                    };
                                    mike = zulu.bind(tango)(mike);
                                    if(!(entity != mike)) { _fun109653_ip = 88; continue _fun109653 }
 53:
                                    tango = _closure5_slot0;
                                    zulu = {};
                                    mike = mike.access_token;
                                    zulu['access_token'] = mike;
                                    mike = undefined;
                                    zulu = tango.bind(mike)(zulu);
                                    entity = _closure5_slot4;
                                    entity = entity.bind(mike)();
 88:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            var _closure5_slot2 = yankee;
                            offset = function() { // Original name: handleConnectionsCallbackError
                                tango = _closure5_slot1;
                                oscar = _closure1_slot1;
                                report = _closure1_slot2;
                                entity = 9;
                                report = report[entity];
                                entity = undefined;
                                golf = oscar.bind(entity)(report);
                                oscar = {};
                                zulu = _closure1_slot9;
                                zulu = zulu.OAUTH2_ERROR;
                                oscar['errorCode'] = zulu;
                                verify = _closure2_slot0;
                                zulu = global;
                                zulu = zulu.HermesInternal;
                                options = zulu.concat;
                                report = 'OAuth2 setup for "';
                                zulu = '" failed';
                                offset = options.bind(report)(verify, zulu);
                                report = golf.prototype;
                                report = Object.create(report, {constructor: {value: golf}});
                                romeo = report;
                                yankee = oscar;
                                zulu = new romeo[golf](yankee, offset, verify);
                                zulu = zulu instanceof Object ? zulu : report;
                                zulu = tango.bind(entity)(zulu);
                                mike = _closure5_slot4;
                                mike = mike.bind(entity)();
                                return entity;
                            };
                            var _closure5_slot3 = offset;
                            report = function() { // Original name: cleanupPromise
                                tango = _closure1_slot1;
                                oscar = _closure1_slot2;
                                entity = 10;
                                mike = oscar[entity];
                                entity = undefined;
                                options = tango.bind(entity)(mike);
                                golf = options.unsubscribe;
                                report = _closure5_slot2;
                                tango = 'USER_CONNECTIONS_UPDATE';
                                tango = golf.bind(options)(tango, report);
                                report = _closure1_slot0;
                                tango = 11;
                                tango = oscar[tango];
                                tango = report.bind(entity)(tango);
                                report = tango.ComponentDispatch;
                                tango = report.unsubscribe;
                                zulu = _closure1_slot7;
                                zulu = zulu.CONNECTIONS_CALLBACK_ERROR;
                                mike = _closure5_slot3;
                                mike = tango.bind(report)(zulu, mike);
                                return entity;
                            };
                            var _closure5_slot4 = report;
                            backup = _closure1_slot5;
                            foxtrot = backup.getAccount;
                            romeo = _closure2_slot0;
                            options = null;
                            romeo = foxtrot.bind(backup)(options, romeo);
                            tango = romeo;
                            if(!(options != romeo)) { _fun109652_ip = 275; continue _fun109652 }
 109: // try_start_0
                            foxtrot = _closure1_slot1;
                            backup = _closure1_slot2;
                            romeo = 13;
                            romeo = backup[romeo];
                            backup = foxtrot.bind(mike)(romeo);
                            foxtrot = backup.refreshAccessToken;
                            romeo = _closure2_slot2;
                            romeo = romeo.type;
                            tango = tango.id;
                            tango = foxtrot.bind(backup)(romeo, tango);
                            SaveGenerator(address=159);
 157:
                            return tango;
 159:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=11);
                            if(romeo) { _fun109652_ip = 260; continue _fun109652 }
 165:
                            verify = tango;
                            if(!(options != tango)) { _fun109652_ip = 192; continue _fun109652 }
 172:
                            options = golf;
                            golf = {};
                            golf['access_token'] = verify;
                            golf = options.bind(mike)(golf);
 187: // try_end0
                            _fun109652_ip = 411; continue _fun109652;
 192: // try_start_1
                            options = _closure1_slot1;
                            verify = _closure1_slot2;
                            golf = 9;
                            golf = verify[golf];
                            romeo = options.bind(mike)(golf);
                            verify = {};
                            golf = _closure1_slot9;
                            golf = golf.OAUTH2_ERROR;
                            verify['errorCode'] = golf;
                            golf = romeo.prototype;
                            options = Object.create(golf, {constructor: {value: romeo}});
                            kilo = 'Refreshing access token did not return a new access token';
                            output = options;
                            sizing = verify;
                            golf = new output[romeo](sizing, kilo, backup);
                            golf = golf instanceof Object ? golf : options;
                            throw golf;
 260: // try_end1
                            return tango;
 263: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=3);
                            zulu = zulu.bind(mike)(tango);
                            _fun109652_ip = 411; continue _fun109652;
 275:
                            tango = _closure1_slot1;
                            golf = _closure1_slot2;
                            zulu = 10;
                            zulu = golf[zulu];
                            verify = tango.bind(mike)(zulu);
                            options = verify.subscribe;
                            zulu = 'USER_CONNECTIONS_UPDATE';
                            zulu = options.bind(verify)(zulu, yankee);
                            options = _closure1_slot0;
                            zulu = 11;
                            zulu = golf[zulu];
                            zulu = options.bind(mike)(zulu);
                            verify = zulu.ComponentDispatch;
                            options = verify.subscribe;
                            zulu = _closure1_slot7;
                            zulu = zulu.CONNECTIONS_CALLBACK_ERROR;
                            zulu = options.bind(verify)(zulu, offset);
                            zulu = 12;
                            zulu = golf[zulu];
                            tango = tango.bind(mike)(zulu);
                            zulu = {};
                            golf = _closure2_slot2;
                            golf = golf.type;
                            zulu['platformType'] = golf;
                            oscar = _closure1_slot6;
                            oscar = oscar.ACTIVITY_RPC;
                            zulu['location'] = oscar;
                            report = _closure2_slot1;
                            zulu['successRedirect'] = report;
                            zulu = tango.bind(mike)(zulu);
 411:
                            return mike;
 414:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            foxtrot = mike.bind(tango)();
            zulu = report.prototype;
            zulu = Object.create(zulu, {constructor: {value: report}});
            backup = zulu;
            mike = new backup[report](foxtrot, romeo);
            mike = mike instanceof Object ? mike : zulu;
            return mike;
 286:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 9;
            mike = report[mike];
            golf = zulu.bind(tango)(mike);
            report = {};
            mike = _closure1_slot9;
            mike = mike.UNAUTHORIZED_FOR_APPLICATION;
            report['errorCode'] = mike;
            mike = golf.prototype;
            zulu = Object.create(mike, {constructor: {value: golf}});
            romeo = 'Command not available for this application';
            backup = zulu;
            foxtrot = report;
            mike = new backup[golf](foxtrot, romeo, yankee);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 354:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 9;
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = {};
            entity = _closure1_slot9;
            entity = entity.INVALID_PROVIDER;
            zulu['errorCode'] = entity;
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            mike = 'Platform not found for provider "';
            entity = '"';
            romeo = report.bind(mike)(oscar, entity);
            mike = tango.prototype;
            mike = Object.create(mike, {constructor: {value: tango}});
            backup = mike;
            foxtrot = zulu;
            entity = new backup[tango](foxtrot, romeo, yankee);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    golf['handler'] = romeo;
    mike[verify] = golf;
    golf = tango.MAYBE_GET_PROVIDER_ACCESS_TOKEN;
    tango = {};
    verify = {};
    romeo = yankee.ANY;
    yankee = new Array(1);
    yankee[0] = foxtrot;
    verify[romeo] = yankee;
    tango['scope'] = verify;
    verify = function(argFoo) { // Original name: validation
        report = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 6;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        mike = entity.bind(mike)(report);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        report = tango.bind(report)();
        tango = report.required;
        tango = tango.bind(report)();
        entity['provider'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['validation'] = verify;
    verify = function* (argFoo) {
        entity = function* (argFoo) { // Original name: ?anon_0_
            _fun109664: for(var _fun109664_ip = 0; ; ) switch(_fun109664_ip) {
 0:
                StartGenerator();
                mike = argFoo;
                ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                if(zulu) { _fun109664_ip = 638; continue _fun109664 }
 13:
                tango = mike.socket;
                mike = mike.args;
                options = mike.provider;
                oscar = undefined;
                SaveGenerator(address=37);
 35:
                return oscar;
 37:
                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                if(zulu) { _fun109664_ip = 635; continue _fun109664 }
 46:
                verify = _closure1_slot0;
                golf = _closure1_slot2;
                report = 7;
                offset = golf[report];
                romeo = verify.bind(oscar)(offset);
                yankee = romeo.validatePostMessageTransport;
                offset = tango.transport;
                offset = yankee.bind(romeo)(offset);
                report = golf[report];
                verify = verify.bind(oscar)(report);
                report = verify.validateApplication;
                tango = tango.application;
                offset = report.bind(verify)(tango);
                report = _closure1_slot1;
                tango = 8;
                tango = golf[tango];
                report = report.bind(oscar)(tango);
                tango = report.get;
                golf = tango.bind(report)(options);
                report = null;
                if(!(report != golf)) { _fun109664_ip = 544; continue _fun109664 }
 146:
                tango = _closure1_slot8;
                tango = tango.AMAZON_MUSIC;
                if(!(options === tango)) { _fun109664_ip = 476; continue _fun109664 }
 163:
                verify = _closure1_slot10;
                tango = verify.has;
                tango = tango.bind(verify)(offset);
                if(tango) { _fun109664_ip = 248; continue _fun109664 }
 180:
                verify = _closure1_slot1;
                offset = _closure1_slot2;
                tango = 9;
                tango = offset[tango];
                yankee = verify.bind(oscar)(tango);
                offset = {};
                tango = _closure1_slot9;
                tango = tango.UNAUTHORIZED_FOR_APPLICATION;
                offset['errorCode'] = tango;
                tango = yankee.prototype;
                verify = Object.create(tango, {constructor: {value: yankee}});
                foxtrot = 'Command not available for this application';
                kilo = verify;
                backup = offset;
                tango = new kilo[yankee](backup, foxtrot, romeo);
                tango = tango instanceof Object ? tango : verify;
                throw tango;
 248:
                verify = _closure1_slot5;
                tango = verify.getAccount;
                tango = tango.bind(verify)(report, options);
                if(!(report != tango)) { _fun109664_ip = 408; continue _fun109664 }
 271:
                offset = _closure1_slot1;
                yankee = _closure1_slot2;
                verify = 13;
                verify = yankee[verify];
                offset = offset.bind(oscar)(verify);
                verify = offset.refreshAccessToken;
                golf = golf.type;
                tango = tango.id;
                tango = verify.bind(offset)(golf, tango);
                SaveGenerator(address=317);
 315:
                return tango;
 317:
                ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                if(golf) { _fun109664_ip = 405; continue _fun109664 }
 323:
                if(!(report != tango)) { _fun109664_ip = 337; continue _fun109664 }
 327:
                report = {};
                report['access_token'] = tango;
                return report;
 337:
                golf = _closure1_slot1;
                verify = _closure1_slot2;
                report = 9;
                report = verify[report];
                offset = golf.bind(oscar)(report);
                verify = {};
                report = _closure1_slot9;
                report = report.OAUTH2_ERROR;
                verify['errorCode'] = report;
                report = offset.prototype;
                golf = Object.create(report, {constructor: {value: offset}});
                foxtrot = 'Refreshing access token did not return a new access token';
                kilo = golf;
                backup = verify;
                report = new kilo[offset](backup, foxtrot, romeo);
                report = report instanceof Object ? report : golf;
                throw report;
 405:
                return tango;
 408:
                report = _closure1_slot1;
                golf = _closure1_slot2;
                tango = 9;
                tango = golf[tango];
                verify = report.bind(oscar)(tango);
                golf = {};
                tango = _closure1_slot9;
                tango = tango.NO_CONNECTION_FOUND;
                golf['errorCode'] = tango;
                tango = verify.prototype;
                report = Object.create(tango, {constructor: {value: verify}});
                foxtrot = 'No connection found';
                kilo = report;
                backup = golf;
                tango = new kilo[verify](backup, foxtrot, romeo);
                tango = tango instanceof Object ? tango : report;
                throw tango;
 476:
                report = _closure1_slot1;
                golf = _closure1_slot2;
                tango = 9;
                tango = golf[tango];
                verify = report.bind(oscar)(tango);
                golf = {};
                tango = _closure1_slot9;
                tango = tango.UNAUTHORIZED_FOR_APPLICATION;
                golf['errorCode'] = tango;
                tango = verify.prototype;
                report = Object.create(tango, {constructor: {value: verify}});
                foxtrot = 'Command not available for this application';
                kilo = report;
                backup = golf;
                tango = new kilo[verify](backup, foxtrot, romeo);
                tango = tango instanceof Object ? tango : report;
                throw tango;
 544:
                report = _closure1_slot1;
                golf = _closure1_slot2;
                tango = 9;
                tango = golf[tango];
                oscar = report.bind(oscar)(tango);
                report = {};
                zulu = _closure1_slot9;
                zulu = zulu.INVALID_PROVIDER;
                report['errorCode'] = zulu;
                zulu = global;
                zulu = zulu.HermesInternal;
                golf = zulu.concat;
                tango = 'Platform not found for provider "';
                zulu = '"';
                foxtrot = golf.bind(tango)(options, zulu);
                tango = oscar.prototype;
                tango = Object.create(tango, {constructor: {value: oscar}});
                kilo = tango;
                backup = report;
                zulu = new kilo[oscar](backup, foxtrot, romeo);
                zulu = zulu instanceof Object ? zulu : tango;
                throw zulu;
 635:
                return mike;
 638:
                return entity;
            }
        };
        mike = entity.next;
        mike = mike.bind(entity)();
        return entity;
    };
    verify = offset.bind(entity)(verify);
    var _closure1_slot3 = verify;
    options = function() {
        entity = undefined;
        tango = _closure1_slot3;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    tango['handler'] = options;
    mike[golf] = tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/providers.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();