// app/modules/profile_effects/ProfileEffectActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot5 = tangon;
    tangon = function(argFoo) { // Original name: parseProfileEffectConfigResponse
        zuuluu = argFoo;
        tangon = zuuluu.sku_id;
        entity = null;
        michal = Object.create(entity);
        entity = 0;
        michal['sku_id'] = entity;
        golfie = {};
        oscard = zuuluu;
        report = michal;
        zuuluu = copyDataProperties(golfie, oscard, report);
        entity = {};
        michal = zuuluu.id;
        entity['id'] = michal;
        entity['skuId'] = tangon;
        michal = {};
        golfie = michal;
        oscard = zuuluu;
        zuuluu = copyDataProperties(golfie, oscard);
        zuuluu = 'skuId';
        michal[zuuluu] = tangon;
        entity['config'] = michal;
        return entity;
    };
    var _closure1_slot6 = tangon;
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    tangon = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 415; continue _fun00001 }
 13:
                    zuuluu = undefined;
                    if(!(tangon === zuuluu)) { _fun00002_ip = 21; continue _fun00001 }
 19:
                    tangon = false;
 21:
                    report = undefined;
                    SaveGenerator(address=27);
 25:
                    return zuuluu;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 412; continue _fun00001 }
 36:
                    if(tangon) { _fun00002_ip = 62; continue _fun00001 }
 39:
                    oscard = _closure1_slot4;
                    tangon = oscard.hasFetched;
                    tangon = tangon.bind(oscard)();
                    if(tangon) { _fun00002_ip = 409; continue _fun00001 }
 62:
                    tangon = _closure1_slot4;
                    tangon = tangon.isFetching;
                    if(tangon) { _fun00002_ip = 409; continue _fun00001 }
 81:
                    oscard = _closure1_slot4;
                    tangon = oscard.canFetch;
                    tangon = tangon.bind(oscard)();
                    if(!tangon) { _fun00002_ip = 409; continue _fun00001 }
 103:
                    golfie = _closure1_slot1;
                    tangon = _closure1_slot2;
                    oscard = 3;
                    tangon = tangon[oscard];
                    verify = golfie.bind(zuuluu)(tangon);
                    golfie = verify.dispatch;
                    tangon = {};
                    offset = 'USER_PROFILE_EFFECTS_FETCH';
                    tangon['type'] = offset;
                    tangon = golfie.bind(verify)(tangon);
 145: // try_start_0
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    tangon = 4;
                    tangon = verify[tangon];
                    tangon = golfie.bind(zuuluu)(tangon);
                    verify = tangon.HTTP;
                    golfie = verify.get;
                    tangon = {};
                    offset = _closure1_slot5;
                    offset = offset.USER_PROFILE_EFFECTS;
                    tangon['url'] = offset;
                    offset = false;
                    tangon['rejectWithError'] = offset;
                    tangon = golfie.bind(verify)(tangon);
                    SaveGenerator(address=206);
 204:
                    return tangon;
 206:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 299; continue _fun00001 }
 212:
                    verify = tangon.body;
                    report = verify;
                    golfie = null;
                    golfie = golfie == verify;
                    verify = undefined;
                    if(golfie) { _fun00002_ip = 239; continue _fun00001 }
 231:
                    verify = report.profile_effect_configs;
 239:
                    golfie = verify.map;
                    report = _closure1_slot6;
                    offset = golfie.bind(verify)(report);
                    golfie = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[oscard];
                    verify = golfie.bind(zuuluu)(report);
                    golfie = verify.dispatch;
                    report = {};
                    yankee = 'USER_PROFILE_EFFECTS_FETCH_SUCCESS';
                    report['type'] = yankee;
                    report['profileEffects'] = offset;
                    report = golfie.bind(verify)(report);
 297: // try_end0
                    _fun00002_ip = 409; continue _fun00001;
 299:
                    return tangon;
 302: // catch_target0
                    CatchBlockStart(arg_register=9);
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    golfie = 5;
                    golfie = tangon[golfie];
                    golfie = report.bind(zuuluu)(golfie);
                    verify = golfie.prototype;
                    verify = Object.create(verify, {constructor: {value: golfie}});
                    foxtra = verify;
                    romeon = offset;
                    golfie = new foxtra[golfie](romeon, yankee);
                    golfie = golfie instanceof Object ? golfie : verify;
                    verify = _closure1_slot0;
                    option = 6;
                    option = tangon[option];
                    verify = verify.bind(zuuluu)(option);
                    option = verify.captureOrIgnoreApiError;
                    option = option.bind(verify)(golfie);
                    tangon = tangon[oscard];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'USER_PROFILE_EFFECTS_FETCH_FAILURE';
                    tangon['type'] = option;
                    tangon['error'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 409:
                    return zuuluu;
 412:
                    return michal;
 415:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    tangon = tangon.bind(entity)();
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/profile_effects/ProfileEffectActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['fetchUserProfileEffects'] = tangon;
    michal = function(argFoo) {
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'PROFILE_EFFECTS_SET_TRY_IT_OUT';
        michal['type'] = report;
        report = argFoo;
        michal['id'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setProfileEffectsTryItOut'] = michal;
    return entity;
})();