// app/modules/markup/MarkupSubtextRule.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = /\n$/;
    var _closure1_slot2 = entity;
    entity = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/;
    var _closure1_slot3 = entity;
    michal = {};
    entity = 0;
    option = oscard[entity];
    golfie = argBaz;
    entity = undefined;
    golfie = golfie.bind(entity)(option);
    golfie = golfie.defaultRules;
    golfie = golfie.heading;
    golfie = golfie.order;
    michal['order'] = golfie;
    golfie = ['-'];
    michal['requiredFirstCharacters'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: match
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argBaz;
            entity = null;
            if(!(entity != oscard)) { _fun00002_ip = 44; continue _fun00001 }
 9:
            michal = '';
            if(!(michal !== oscard)) { _fun00002_ip = 44; continue _fun00001 }
 17:
            zuuluu = oscard.match;
            michal = _closure1_slot2;
            michal = zuuluu.bind(oscard)(michal);
            michal = entity != michal;
            entity = null;
            if(!michal) { _fun00002_ip = 96; continue _fun00001 }
 44:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 0;
            zuuluu = report[zuuluu];
            report = undefined;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.anyScopeRegex;
            michal = _closure1_slot3;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = argFoo;
            michal = argBar;
            entity = tangon.bind(report)(zuuluu, michal, oscard);
 96:
            return entity;
        }
    };
    michal['match'] = golfie;
    tangon = function(argFoo, argBar, argBaz) { // Original name: parse
        entity = {};
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 0;
        zuuluu = zuuluu[michal];
        michal = undefined;
        oscard = tangon.bind(michal)(zuuluu);
        report = oscard.parseInline;
        zuuluu = argFoo;
        michal = 1;
        zuuluu = zuuluu[michal];
        michal = zuuluu.trim;
        tangon = michal.bind(zuuluu)();
        zuuluu = argBar;
        michal = argBaz;
        michal = report.bind(oscard)(zuuluu, tangon, michal);
        entity['content'] = michal;
        return entity;
    };
    michal['parse'] = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/markup/MarkupSubtextRule.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();