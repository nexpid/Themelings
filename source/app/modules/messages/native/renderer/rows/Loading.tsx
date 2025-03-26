// app/modules/messages/native/renderer/rows/Loading.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    offset = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = golfie[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.LoadingType;
    var _closure1_slot4 = report;
    report = tangon.RowType;
    var _closure1_slot5 = report;
    tangon = tangon.SeparatorAction;
    var _closure1_slot6 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createNativeStyleProperties;
    tangon = {};
    verify = 4;
    yankee = golfie[verify];
    yankee = offset.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_ACCENT;
    tangon['loadButtonBackgroundColor'] = yankee;
    yankee = golfie[verify];
    yankee = offset.bind(entity)(yankee);
    yankee = yankee.unsafe_rawColors;
    yankee = yankee.WHITE_500;
    tangon['loadButtonColor'] = yankee;
    verify = golfie[verify];
    verify = offset.bind(entity)(verify);
    verify = verify.colors;
    verify = verify.BACKGROUND_ACCENT;
    tangon['loadingColor'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot8 = tangon;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/native/renderer/rows/Loading.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: Loading
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.row;
            tangon = undefined;
            var _closure2_slot2 = tangon;
            option = entity.rowType;
            offset = entity.text;
            var _closure2_slot0 = offset;
            report = entity.isLoading;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 5;
            zuuluu = golfie[zuuluu];
            oscard = oscard.bind(tangon)(zuuluu);
            zuuluu = oscard.useMessageRendererTheme;
            oscard = zuuluu.bind(oscard)();
            zuuluu = _closure1_slot8;
            golfie = zuuluu.bind(tangon)(oscard);
            var _closure2_slot1 = golfie;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.LOAD_BEFORE;
            if(!(option !== zuuluu)) { _fun00002_ip = 110; continue _fun00001 }
 98:
            zuuluu = _closure1_slot6;
            yankee = zuuluu.LOAD_MORE_AFTER;
            _fun00002_ip = 120; continue _fun00001;
 110:
            zuuluu = _closure1_slot6;
            yankee = zuuluu.LOAD_MORE_BEFORE;
 120:
            _closure2_slot2 = yankee;
            verify = _closure1_slot3;
            oscard = verify.useMemo;
            zuuluu = new Array(3);
            zuuluu[0] = yankee;
            zuuluu[1] = golfie;
            zuuluu[2] = offset;
            michal = function() {
                entity = {};
                zuuluu = {};
                tangon = _closure2_slot2;
                zuuluu['type'] = tangon;
                entity['action'] = zuuluu;
                zuuluu = _closure2_slot1;
                zuuluu = zuuluu.loadButtonBackgroundColor;
                entity['backgroundColor'] = zuuluu;
                zuuluu = 4;
                entity['cornerRadius'] = zuuluu;
                michal = _closure2_slot0;
                entity['text'] = michal;
                return entity;
            };
            oscard = oscard.bind(verify)(michal, zuuluu);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 6;
            entity = verify[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.Loading;
            entity = {};
            entity['id'] = option;
            entity['button'] = oscard;
            if(report) { _fun00002_ip = 214; continue _fun00001 }
 206:
            oscard = golfie.loadButtonColor;
            _fun00002_ip = 220; continue _fun00001;
 214:
            oscard = golfie.loadingColor;
 220:
            entity['color'] = oscard;
            entity['isLoading'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = report;
    zuuluu['resolveBaseColors'] = tangon;
    michal = function(argFoo, argBar) { // Original name: generateLoadingRowData
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = entity.rowType;
            zuuluu = entity.changeType;
            oscard = entity.text;
            michal = entity.isLoading;
            option = _closure1_slot8;
            report = undefined;
            entity = argBar;
            report = option.bind(report)(entity);
            entity = _closure1_slot4;
            entity = entity.LOAD_BEFORE;
            if(!(tangon !== entity)) { _fun00004_ip = 69; continue _fun00003 }
 57:
            entity = _closure1_slot6;
            option = entity.LOAD_MORE_AFTER;
            _fun00004_ip = 79; continue _fun00003;
 69:
            entity = _closure1_slot6;
            option = entity.LOAD_MORE_BEFORE;
 79:
            entity = {};
            golfie = _closure1_slot5;
            golfie = golfie.LOADING;
            entity['type'] = golfie;
            entity['id'] = tangon;
            tangon = {};
            golfie = {};
            golfie['type'] = option;
            tangon['action'] = golfie;
            golfie = report.loadButtonBackgroundColor;
            tangon['backgroundColor'] = golfie;
            golfie = 4;
            tangon['cornerRadius'] = golfie;
            tangon['text'] = oscard;
            entity['button'] = tangon;
            if(michal) { _fun00004_ip = 149; continue _fun00003 }
 141:
            tangon = report.loadButtonColor;
            _fun00004_ip = 155; continue _fun00003;
 149:
            tangon = report.loadingColor;
 155:
            entity['color'] = tangon;
            entity['changeType'] = zuuluu;
            entity['isLoading'] = michal;
            return entity;
        }
    };
    zuuluu['generateLoadingRowData'] = michal;
    return entity;
})();