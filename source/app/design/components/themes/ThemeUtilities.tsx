// app/design/components/themes/ThemeUtilities.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ThemeTypes;
    var _closure1_slot0 = golfie;
    tangon = tangon.ThemeExtends;
    var _closure1_slot1 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/themes/ThemeUtilities.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: isThemeLight
        entity = _closure1_slot0;
        michal = entity.LIGHT;
        entity = argFoo;
        entity = entity === michal;
        return entity;
    };
    zuuluu['isThemeLight'] = tangon;
    tangon = function(argFoo) { // Original name: isThemeDark
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot0;
            zuuluu = zuuluu.DARK;
            if(!(zuuluu !== michal)) { _fun00002_ip = 52; continue _fun00001 }
 20:
            zuuluu = _closure1_slot0;
            zuuluu = zuuluu.MIDNIGHT;
            if(!(zuuluu !== michal)) { _fun00002_ip = 52; continue _fun00001 }
 34:
            entity = _closure1_slot0;
            entity = entity.DARKER;
            if(!(entity !== michal)) { _fun00002_ip = 52; continue _fun00001 }
 48:
            entity = false;
            return entity;
 52:
            entity = true;
            return entity;
        }
    };
    zuuluu['isThemeDark'] = tangon;
    michal = function(argFoo) { // Original name: getThemeClass
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            entity = null;
            if(!(entity == golfie)) { _fun00004_ip = 13; continue _fun00003 }
 9:
            michal = undefined;
            return michal;
 13:
            zuuluu = _closure1_slot1;
            michal = zuuluu.get;
            oscard = michal.bind(zuuluu)(golfie);
            if(!(entity == oscard)) { _fun00004_ip = 68; continue _fun00003 }
 34:
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = 'theme-';
            entity = ' images-';
            entity = zuuluu.bind(michal)(golfie, entity, golfie);
            _fun00004_ip = 112; continue _fun00003;
 68:
            michal = global;
            michal = michal.HermesInternal;
            report = michal.concat;
            foxtra = 'theme-';
            yankee = ' theme-';
            verify = ' images-';
            romeon = oscard;
            offset = golfie;
            option = oscard;
            entity = foxtra[report](romeon, yankee, offset, verify, option, golfie);
 112:
            return entity;
        }
    };
    zuuluu['getThemeClass'] = michal;
    return entity;
})();