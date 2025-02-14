// app/modules/profile_effects/ProfileEffectActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot5 = tango;
    tango = function(argFoo) { // Original name: parseProfileEffectConfigResponse
        zulu = argFoo;
        tango = zulu.sku_id;
        entity = null;
        mike = Object.create(entity);
        entity = 0;
        mike['sku_id'] = entity;
        golf = {};
        oscar = zulu;
        report = mike;
        zulu = copyDataProperties(golf, oscar, report);
        entity = {};
        mike = zulu.id;
        entity['id'] = mike;
        entity['skuId'] = tango;
        mike = {};
        golf = mike;
        oscar = zulu;
        zulu = copyDataProperties(golf, oscar);
        zulu = 'skuId';
        mike[zulu] = tango;
        entity['config'] = mike;
        return entity;
    };
    var _closure1_slot6 = tango;
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun77094: for(var _fun77094_ip = 0; ; ) switch(_fun77094_ip) {
 0:
                    StartGenerator();
                    tango = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun77094_ip = 415; continue _fun77094 }
 13:
                    zulu = undefined;
                    if(!(tango === zulu)) { _fun77094_ip = 21; continue _fun77094 }
 19:
                    tango = false;
 21:
                    report = undefined;
                    SaveGenerator(address=27);
 25:
                    return zulu;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscar) { _fun77094_ip = 412; continue _fun77094 }
 36:
                    if(tango) { _fun77094_ip = 62; continue _fun77094 }
 39:
                    oscar = _closure1_slot4;
                    tango = oscar.hasFetched;
                    tango = tango.bind(oscar)();
                    if(tango) { _fun77094_ip = 409; continue _fun77094 }
 62:
                    tango = _closure1_slot4;
                    tango = tango.isFetching;
                    if(tango) { _fun77094_ip = 409; continue _fun77094 }
 81:
                    oscar = _closure1_slot4;
                    tango = oscar.canFetch;
                    tango = tango.bind(oscar)();
                    if(!tango) { _fun77094_ip = 409; continue _fun77094 }
 103:
                    golf = _closure1_slot1;
                    tango = _closure1_slot2;
                    oscar = 3;
                    tango = tango[oscar];
                    verify = golf.bind(zulu)(tango);
                    golf = verify.dispatch;
                    tango = {};
                    offset = 'USER_PROFILE_EFFECTS_FETCH';
                    tango['type'] = offset;
                    tango = golf.bind(verify)(tango);
 145: // try_start_0
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    tango = 4;
                    tango = verify[tango];
                    tango = golf.bind(zulu)(tango);
                    verify = tango.HTTP;
                    golf = verify.get;
                    tango = {};
                    offset = _closure1_slot5;
                    offset = offset.USER_PROFILE_EFFECTS;
                    tango['url'] = offset;
                    offset = false;
                    tango['rejectWithError'] = offset;
                    tango = golf.bind(verify)(tango);
                    SaveGenerator(address=206);
 204:
                    return tango;
 206:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun77094_ip = 299; continue _fun77094 }
 212:
                    verify = tango.body;
                    report = verify;
                    golf = null;
                    golf = golf == verify;
                    verify = undefined;
                    if(golf) { _fun77094_ip = 239; continue _fun77094 }
 231:
                    verify = report.profile_effect_configs;
 239:
                    golf = verify.map;
                    report = _closure1_slot6;
                    offset = golf.bind(verify)(report);
                    golf = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[oscar];
                    verify = golf.bind(zulu)(report);
                    golf = verify.dispatch;
                    report = {};
                    yankee = 'USER_PROFILE_EFFECTS_FETCH_SUCCESS';
                    report['type'] = yankee;
                    report['profileEffects'] = offset;
                    report = golf.bind(verify)(report);
 297: // try_end0
                    _fun77094_ip = 409; continue _fun77094;
 299:
                    return tango;
 302: // catch_target0
                    CatchBlockStart(arg_register=9);
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    golf = 5;
                    golf = tango[golf];
                    golf = report.bind(zulu)(golf);
                    verify = golf.prototype;
                    verify = Object.create(verify, {constructor: {value: golf}});
                    foxtrot = verify;
                    romeo = offset;
                    golf = new foxtrot[golf](romeo, yankee);
                    golf = golf instanceof Object ? golf : verify;
                    verify = _closure1_slot0;
                    options = 6;
                    options = tango[options];
                    verify = verify.bind(zulu)(options);
                    options = verify.captureOrIgnoreApiError;
                    options = options.bind(verify)(golf);
                    tango = tango[oscar];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    options = 'USER_PROFILE_EFFECTS_FETCH_FAILURE';
                    tango['type'] = options;
                    tango['error'] = golf;
                    tango = report.bind(oscar)(tango);
 409:
                    return zulu;
 412:
                    return mike;
 415:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    tango = tango.bind(entity)();
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/profile_effects/ProfileEffectActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['fetchUserProfileEffects'] = tango;
    mike = function(argFoo) {
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'PROFILE_EFFECTS_SET_TRY_IT_OUT';
        mike['type'] = report;
        report = argFoo;
        mike['id'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setProfileEffectsTryItOut'] = mike;
    return entity;
})();