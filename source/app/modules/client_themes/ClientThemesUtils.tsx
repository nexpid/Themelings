// app/modules/client_themes/ClientThemesUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
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
    verify = 0;
    tangon = oscard[verify];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    option = tangon.BACKGROUND_GRADIENT_PRESETS_MOBILE;
    yankee = tangon.REDESIGN_STANDARD_BACKGROUND_THEMES;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ThemeTypes;
    var _closure1_slot2 = tangon;
    tangon = new Array(0);
    romeon = tangon;
    offset = 0;
    offset = arraySpread(romeon, yankee, offset);
    romeon = tangon;
    yankee = option;
    golfie = arraySpread(romeon, yankee, offset);
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/client_themes/ClientThemesUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getThemeForColor
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.l;
            entity = 0.3;
            if(!(!(michal <= entity))) { _fun00002_ip = 36; continue _fun00001 }
 22:
            entity = _closure1_slot2;
            entity = entity.LIGHT;
            _fun00002_ip = 48; continue _fun00001;
 36:
            michal = _closure1_slot2;
            entity = michal.DARK;
 48:
            return entity;
        }
    };
    zuuluu['getThemeForColor'] = tangon;
    tangon = function(argFoo) { // Original name: getLinearGradientForBackgroundGradient
        entity = argFoo;
        oscard = entity.angle;
        zuuluu = entity.colors;
        michal = zuuluu.map;
        entity = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.token;
            option = entity.stop;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.getColor;
            offset = entity.bind(michal)(zuuluu);
            entity = global;
            entity = entity.HermesInternal;
            tangon = entity.concat;
            yankee = '';
            verify = ' ';
            golfie = '%';
            entity = yankee[tangon](offset, verify, option, golfie, oscard);
            return entity;
        };
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.join;
        entity = ', ';
        option = michal.bind(zuuluu)(entity);
        entity = global;
        entity = entity.HermesInternal;
        tangon = entity.concat;
        yankee = 'linear-gradient(';
        verify = 'deg, ';
        golfie = ')';
        offset = oscard;
        entity = yankee[tangon](offset, verify, option, golfie, oscard);
        return entity;
    };
    zuuluu['getLinearGradientForBackgroundGradient'] = tangon;
    tangon = function() { // Original name: getMobileThemesPresets
        entity = _closure1_slot3;
        return entity;
    };
    zuuluu['getMobileThemesPresets'] = tangon;
    michal = function(argFoo, argBar) { // Original name: areThemesEqualForGradientThemes
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            entity = oscard === report;
            if(entity) { _fun00004_ip = 83; continue _fun00003 }
 13:
            michal = _closure1_slot2;
            michal = michal.DARK;
            michal = oscard === michal;
            if(!michal) { _fun00004_ip = 45; continue _fun00003 }
 32:
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.DARKER;
            michal = report === zuuluu;
 45:
            if(michal) { _fun00004_ip = 80; continue _fun00003 }
 48:
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.DARKER;
            zuuluu = oscard === zuuluu;
            if(!zuuluu) { _fun00004_ip = 77; continue _fun00003 }
 64:
            tangon = _closure1_slot2;
            tangon = tangon.DARK;
            zuuluu = report === tangon;
 77:
            michal = zuuluu;
 80:
            entity = michal;
 83:
            return entity;
        }
    };
    zuuluu['areThemesEqualForGradientThemes'] = michal;
    return entity;
})();