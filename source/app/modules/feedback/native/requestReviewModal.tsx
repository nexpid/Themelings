// app/modules/feedback/native/requestReviewModal.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _showAndroidRatingRequest
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 138; continue _fun00001 }
 10: // try_start_0
                    tangon = _closure1_slot1;
                    michal = _closure1_slot2;
                    oscard = 3;
                    michal = michal[oscard];
                    report = undefined;
                    tangon = tangon.bind(report)(michal);
                    michal = null;
                    tangon = michal == tangon;
                    michal = undefined;
                    if(tangon) { _fun00002_ip = 75; continue _fun00001 }
 46:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[oscard];
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.requestRating;
                    michal = zuuluu.bind(tangon)();
 75:
                    SaveGenerator(address=79);
 77:
                    return michal;
 79:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 87; continue _fun00001 }
 85: // try_end0
                    _fun00002_ip = 133; continue _fun00001;
 87:
                    return michal;
 90: // catch_target0
                    CatchBlockStart(arg_register=5);
                    tangon = _closure1_slot5;
                    zuuluu = tangon.error;
                    michal = global;
                    michal = michal.HermesInternal;
                    report = michal.concat;
                    michal = 'Failed to show Android rating request: ';
                    michal = report.bind(michal)(oscard);
                    michal = zuuluu.bind(tangon)(michal);
 133:
                    michal = undefined;
                    return michal;
 138:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'requestReviewModal';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/feedback/native/requestReviewModal.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: requestReviewModal
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00004_ip = 61; continue _fun00003 }
 37:
            michal = _closure1_slot4;
            zuuluu = michal.AppStoreManager;
            michal = zuuluu.requestReview;
            michal = michal.bind(zuuluu)();
            _fun00004_ip = 74; continue _fun00003;
 61:
            michal = function() { // Original name: showAndroidRatingRequest
                entity = undefined;
                tangon = _closure1_slot6;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            michal = michal.bind(entity)();
 74:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();