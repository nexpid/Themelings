// app/modules/user_profile/useProfileThemeValues.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useMemo;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/useProfileThemeValues.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useProfileThemeValues
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 2;
        zuuluu = tangon[zuuluu];
        tangon = undefined;
        option = report.bind(tangon)(zuuluu);
        golfie = option.useStateFromStores;
        zuuluu = _closure1_slot4;
        report = new Array(1);
        report[0] = zuuluu;
        zuuluu = function() {
            entity = _closure1_slot4;
            entity = entity.saturation;
            return entity;
        };
        report = golfie.bind(option)(report, zuuluu);
        var _closure2_slot1 = report;
        zuuluu = _closure1_slot3;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot0;
                entity = null;
                if(!(entity != michal)) { _fun00002_ip = 340; continue _fun00001 }
 16:
                golfie = {};
                option = _closure2_slot0;
                golfie['theme'] = option;
                michal = _closure2_slot1;
                golfie['saturation'] = michal;
                michal = {};
                foxtra = _closure1_slot1;
                yankee = _closure1_slot2;
                offset = 3;
                report = yankee[offset];
                verify = undefined;
                report = foxtra.bind(verify)(report);
                romeon = report.internal;
                oscard = romeon.resolveSemanticColor;
                report = yankee[offset];
                report = foxtra.bind(verify)(report);
                report = report.colors;
                report = report.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME;
                report = oscard.bind(romeon)(option, report, golfie);
                michal['overlaySyncedWithUserTheme'] = report;
                report = yankee[offset];
                report = foxtra.bind(verify)(report);
                romeon = report.internal;
                oscard = romeon.resolveSemanticColor;
                report = yankee[offset];
                report = foxtra.bind(verify)(report);
                report = report.colors;
                report = report.PROFILE_GRADIENT_OVERLAY;
                report = oscard.bind(romeon)(option, report, golfie);
                michal['overlay'] = report;
                report = yankee[offset];
                report = foxtra.bind(verify)(report);
                romeon = report.internal;
                oscard = romeon.resolveSemanticColor;
                report = yankee[offset];
                report = foxtra.bind(verify)(report);
                report = report.colors;
                report = report.PROFILE_GRADIENT_SECTION_BOX;
                report = oscard.bind(romeon)(option, report, golfie);
                michal['sectionBox'] = report;
                oscard = _closure1_slot0;
                report = 4;
                report = yankee[report];
                oscard = oscard.bind(verify)(report);
                report = oscard.getThemes;
                report = report.bind(oscard)();
                oscard = report.DARK;
                report = 0.12;
                if(!(option === oscard)) { _fun00002_ip = 268; continue _fun00001 }
 258:
                report = 0.24;
 268:
                michal['dividerOpacity'] = report;
                option = _closure1_slot1;
                zuuluu = _closure1_slot2;
                report = zuuluu[offset];
                report = option.bind(verify)(report);
                oscard = report.internal;
                report = oscard.resolveSemanticColor;
                tangon = _closure2_slot0;
                zuuluu = zuuluu[offset];
                zuuluu = option.bind(verify)(zuuluu);
                zuuluu = zuuluu.colors;
                zuuluu = zuuluu.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND;
                zuuluu = report.bind(oscard)(tangon, zuuluu, golfie);
                michal['rolePillBackgroundColor'] = zuuluu;
                return michal;
 340:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useProfileThemeValues'] = michal;
    return entity;
})();