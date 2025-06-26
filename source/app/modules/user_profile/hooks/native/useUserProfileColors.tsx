// app/modules/user_profile/hooks/native/useUserProfileColors.tsx
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/hooks/native/useUserProfileColors.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useUserProfileColors
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.theme;
            oscard = entity.primaryColor;
            kiloes = entity.secondaryColor;
            offset = _closure1_slot1;
            romeon = _closure1_slot2;
            entity = 1;
            entity = romeon[entity];
            verify = undefined;
            entity = offset.bind(verify)(entity);
            option = entity.bind(verify)();
            golfie = _closure1_slot0;
            entity = 2;
            entity = romeon[entity];
            michal = golfie.bind(verify)(entity);
            entity = michal.useProfileThemeValues;
            michal = entity.bind(michal)(tangon);
            entity = 3;
            entity = romeon[entity];
            yankee = golfie.bind(verify)(entity);
            report = yankee.useStateFromStores;
            entity = _closure1_slot3;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                entity = _closure1_slot3;
                entity = entity.syncProfileThemeWithUserTheme;
                return entity;
            };
            yankee = report.bind(yankee)(tangon, entity);
            entity = {};
            report = 4;
            tangon = romeon[report];
            sizing = golfie.bind(verify)(tangon);
            backup = sizing.useToken;
            tangon = 5;
            foxtra = romeon[tangon];
            foxtra = offset.bind(verify)(foxtra);
            foxtra = foxtra.colors;
            foxtra = foxtra.BG_BASE_SECONDARY;
            foxtra = backup.bind(sizing)(foxtra, option);
            entity['gradientFallbackBackground'] = foxtra;
            foxtra = romeon[report];
            sizing = golfie.bind(verify)(foxtra);
            backup = sizing.useToken;
            foxtra = romeon[tangon];
            foxtra = offset.bind(verify)(foxtra);
            foxtra = foxtra.colors;
            foxtra = foxtra.BG_BASE_SECONDARY;
            foxtra = backup.bind(sizing)(foxtra, option);
            entity['gradientSecondaryBackground'] = foxtra;
            foxtra = romeon[report];
            sizing = golfie.bind(verify)(foxtra);
            backup = sizing.useToken;
            foxtra = romeon[tangon];
            foxtra = offset.bind(verify)(foxtra);
            foxtra = foxtra.colors;
            foxtra = foxtra.BG_SURFACE_RAISED;
            foxtra = backup.bind(sizing)(foxtra, option);
            entity['containerBackground'] = foxtra;
            foxtra = romeon[report];
            sizing = golfie.bind(verify)(foxtra);
            backup = sizing.useToken;
            foxtra = romeon[tangon];
            foxtra = offset.bind(verify)(foxtra);
            foxtra = foxtra.colors;
            foxtra = foxtra.BG_BASE_SECONDARY;
            foxtra = backup.bind(sizing)(foxtra, option);
            entity['avatarBackground'] = foxtra;
            report = romeon[report];
            golfie = golfie.bind(verify)(report);
            report = golfie.useToken;
            tangon = romeon[tangon];
            tangon = offset.bind(verify)(tangon);
            tangon = tangon.colors;
            tangon = tangon.BACKGROUND_FLOATING;
            tangon = report.bind(golfie)(tangon, option);
            entity['statusBackground'] = tangon;
            tangon = null;
            if(!(tangon != oscard)) { _fun00002_ip = 601; continue _fun00001 }
 365:
            if(!(tangon != kiloes)) { _fun00002_ip = 601; continue _fun00001 }
 372:
            if(!(tangon != michal)) { _fun00002_ip = 601; continue _fun00001 }
 379:
            option = michal.sectionBox;
            backup = michal.overlay;
            golfie = michal.overlaySyncedWithUserTheme;
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            offset = 6;
            michal = michal[offset];
            report = tangon.bind(verify)(michal);
            tangon = report.calculateOverlayedColor;
            michal = backup;
            if(!yankee) { _fun00002_ip = 432; continue _fun00001 }
 429:
            michal = golfie;
 432:
            golfie = tangon.bind(report)(oscard, michal);
            michal = {};
            result = michal;
            output = entity;
            tangon = copyDataProperties(result, output);
            tangon = 'containerBackground';
            michal[tangon] = option;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            tangon = 7;
            report = zuuluu[tangon];
            romeon = oscard.bind(verify)(report);
            yankee = romeon.int2hex;
            report = zuuluu[offset];
            foxtra = oscard.bind(verify)(report);
            report = foxtra.calculateOverlayedColor;
            report = report.bind(foxtra)(kiloes, backup);
            yankee = yankee.bind(romeon)(report);
            report = 'gradientSecondaryBackground';
            michal[report] = yankee;
            report = zuuluu[tangon];
            yankee = oscard.bind(verify)(report);
            report = yankee.int2hex;
            yankee = report.bind(yankee)(golfie);
            report = 'avatarBackground';
            michal[report] = yankee;
            tangon = zuuluu[tangon];
            report = oscard.bind(verify)(tangon);
            tangon = report.int2hex;
            zuuluu = zuuluu[offset];
            oscard = oscard.bind(verify)(zuuluu);
            zuuluu = oscard.calculateOverlayedColor;
            zuuluu = zuuluu.bind(oscard)(golfie, option);
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = 'statusBackground';
            michal[zuuluu] = tangon;
            return michal;
 601:
            return entity;
        }
    };
    zuuluu['useUserProfileColors'] = michal;
    return entity;
})();