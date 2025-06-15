// app/modules/ads/native/AdUserActionCreators.android.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = function() { // Original name: _fetchAdUser
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 159; continue _fun00001 }
 10: // try_start_0
                    tangon = _closure1_slot0;
                    report = _closure1_slot1;
                    michal = 2;
                    michal = report[michal];
                    report = undefined;
                    tangon = tangon.bind(report)(michal);
                    michal = tangon.getGoogleAdvertisingId;
                    michal = michal.bind(tangon)();
                    SaveGenerator(address=51);
 49:
                    return michal;
 51:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 125; continue _fun00001 }
 57:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot1;
                    zuuluu = 3;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'FETCH_AD_USER_SUCCESS';
                    zuuluu['type'] = oscard;
                    oscard = michal.googleAdvertisingId;
                    zuuluu['advertisingId'] = oscard;
                    oscard = michal.isLimitAdTrackingEnabled;
                    zuuluu['isLimitAdTrackingEnabled'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 123: // try_end0
                    _fun00002_ip = 154; continue _fun00001;
 125:
                    return michal;
 128: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot3;
                    zuuluu = tangon.warn;
                    michal = 'Failed to get google advertising ID:';
                    michal = zuuluu.bind(tangon)(michal, report);
 154:
                    michal = undefined;
                    return michal;
 159:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    golfie = oscard.bind(entity)(tangon);
    tangon = golfie.prototype;
    oscard = Object.create(tangon, {constructor: {value: golfie}});
    yankee = 'AdUserActionCreators';
    romeon = oscard;
    tangon = new romeon[golfie](yankee, offset);
    tangon = tangon instanceof Object ? tangon : oscard;
    var _closure1_slot3 = tangon;
    tangon = 4;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/ads/native/AdUserActionCreators.android.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: fetchAdUser
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchAdUser'] = michal;
    return entity;
})();