// app/modules/main_tabs_v2/native/settings/screens/appearance/FontScaleStore.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        oscard = argBar;
        zuuluu = argFre;
        golfie = argPlu;
        entity = global;
        option = entity.Object;
        report = option.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = report.bind(option)(zuuluu, entity, tangon);
        entity = 0;
        tangon = golfie[entity];
        entity = undefined;
        report = oscard.bind(entity)(tangon);
        tangon = report.isAndroid;
        tangon = tangon.bind(report)();
        if(tangon) { _fun00002_ip = 84; continue _fun00001 }
 68:
        report = {'fontScale': 1, 'isClassicChatFontScaleEnabled': false};
        _fun00002_ip = 111; continue _fun00001;
 84:
        tangon = 1;
        option = golfie[tangon];
        tangon = argBaz;
        option = tangon.bind(entity)(option);
        tangon = option.getCustomFontScale;
        report = tangon.bind(option)();
 111:
        tangon = {};
        option = report.fontScale;
        tangon['persistedFontScale'] = option;
        option = report.isClassicChatFontScaleEnabled;
        tangon['persistedIsClassicChatFontScaleEnabled'] = option;
        option = report.fontScale;
        tangon['fontScale'] = option;
        report = report.isClassicChatFontScaleEnabled;
        tangon['isClassicChatFontScaleEnabled'] = report;
        var _closure1_slot0 = tangon;
        report = 2;
        report = golfie[report];
        option = oscard.bind(entity)(report);
        report = option.createWithEqualityFn;
        michal = function() {
            entity = _closure1_slot0;
            return entity;
        };
        michal = report.bind(option)(michal);
        report = 3;
        report = golfie[report];
        golfie = oscard.bind(entity)(report);
        oscard = golfie.fileFinishedImporting;
        report = 'modules/main_tabs_v2/native/settings/screens/appearance/FontScaleStore.tsx';
        report = oscard.bind(golfie)(report);
        zuuluu['DEFAULT_FONT_SCALE_STORE_STATE'] = tangon;
        zuuluu['useFontScaleStore'] = michal;
        return entity;
    }
})();