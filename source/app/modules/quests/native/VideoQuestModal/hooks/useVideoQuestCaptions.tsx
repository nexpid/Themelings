// app/modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = {};
    golfie = 'none';
    tangon['NONE'] = golfie;
    golfie = 'loading';
    tangon['LOADING'] = golfie;
    golfie = 'success';
    tangon['SUCCESS'] = golfie;
    golfie = 'error';
    tangon['ERROR'] = golfie;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            offset = 2;
            report = michal[offset];
            verify = undefined;
            oscard = tangon.bind(verify)(report);
            report = oscard.resolveVideoQuestAsset;
            michal = michal[offset];
            michal = tangon.bind(verify)(michal);
            michal = michal.VideoQuestAssetId;
            tangon = michal.VIDEO_PLAYER_CAPTION;
            michal = argFoo;
            michal = report.bind(oscard)(tangon, michal);
            yankee = null;
            tangon = yankee == michal;
            golfie = undefined;
            if(tangon) { _fun00002_ip = 79; continue _fun00001 }
 74:
            golfie = michal.url;
 79:
            var _closure2_slot0 = golfie;
            oscard = _closure1_slot3;
            tangon = oscard.useState;
            michal = _closure1_slot4;
            michal = michal.NONE;
            michal = tangon.bind(oscard)(michal);
            option = _closure1_slot2;
            tangon = option.bind(verify)(michal, offset);
            zuuluu = 0;
            michal = tangon[zuuluu];
            report = 1;
            tangon = tangon[report];
            var _closure2_slot1 = tangon;
            tangon = oscard.useState;
            tangon = tangon.bind(oscard)(yankee);
            tangon = option.bind(verify)(tangon, offset);
            zuuluu = tangon[zuuluu];
            tangon = tangon[report];
            var _closure2_slot2 = tangon;
            report = oscard.useEffect;
            tangon = new Array(1);
            tangon[0] = golfie;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00004_ip = 41; continue _fun00003 }
 15:
                    tangon = _closure2_slot1;
                    michal = _closure1_slot4;
                    zuuluu = michal.NONE;
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    _fun00004_ip = 132; continue _fun00003;
 41:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.get;
                    michal = {};
                    report = _closure2_slot0;
                    michal['url'] = report;
                    report = true;
                    michal['rejectWithError'] = report;
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.then;
                    michal = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            michal = argFoo;
 3: // try_start_0
                            report = _closure1_slot0;
                            tangon = _closure1_slot1;
                            zuuluu = 4;
                            tangon = tangon[zuuluu];
                            zuuluu = undefined;
                            report = report.bind(zuuluu)(tangon);
                            tangon = report.parseVtt;
                            michal = michal.text;
                            tangon = tangon.bind(report)(michal);
                            report = _closure2_slot2;
                            tangon = tangon.cues;
                            tangon = report.bind(zuuluu)(tangon);
                            michal = _closure2_slot1;
                            entity = _closure1_slot4;
                            entity = entity.SUCCESS;
                            entity = michal.bind(zuuluu)(entity);
 81: // try_end0
                            _fun00006_ip = 112; continue _fun00005;
 83: // catch_target0
                            CatchBlockStart(arg_register=0);
                            zuuluu = _closure2_slot1;
                            entity = _closure1_slot4;
                            michal = entity.ERROR;
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
 112:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.catch;
                    entity = function() {
                        zuuluu = _closure2_slot1;
                        entity = _closure1_slot4;
                        michal = entity.ERROR;
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            entity = report.bind(oscard)(entity, tangon);
            entity = {};
            entity['captions'] = zuuluu;
            entity['status'] = michal;
            return entity;
        }
    };
    zuuluu['useVideoQuestCaptions'] = michal;
    return entity;
})();