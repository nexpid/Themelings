// discord_common/js/packages/i18n/updateRules.web.tsx
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/i18n/updateRules.web.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: updateRules
        entity = argFoo;
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        michal = 2;
        golfie = oscard[michal];
        tangon = undefined;
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.defaultRules;
        golfie = golfie.heading;
        entity['heading'] = golfie;
        golfie = oscard[michal];
        golfie = report.bind(tangon)(golfie);
        golfie = golfie.defaultRules;
        golfie = golfie.lheading;
        entity['lheading'] = golfie;
        michal = oscard[michal];
        michal = report.bind(tangon)(michal);
        michal = michal.defaultRules;
        michal = michal.list;
        entity['list'] = michal;
        michal = {};
        option = entity.paragraph;
        verify = michal;
        tangon = copyDataProperties(verify, option);
        report = function(argFoo, argBar, argBaz) { // Original name: react
            entity = argBaz;
            report = _closure1_slot2;
            tangon = {};
            michal = argFoo;
            oscard = michal.content;
            michal = argBar;
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(oscard, entity);
            tangon['children'] = michal;
            michal = entity.key;
            entity = 'p';
            entity = report.bind(zuuluu)(entity, tangon, michal);
            return entity;
        };
        tangon = 'react';
        michal[tangon] = report;
        entity['paragraph'] = michal;
        michal = {};
        option = entity.link;
        verify = michal;
        report = copyDataProperties(verify, option);
        zuuluu = function(argFoo, argBar, argBaz) { // Original name: react
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                entity = argBaz;
                zuuluu = {};
                tangon = michal.context;
                oscard = null;
                if(!(oscard != tangon)) { _fun00002_ip = 78; continue _fun00001 }
 19:
                report = michal.context;
                tangon = michal.target;
                tangon = report[tangon];
                if(!tangon) { _fun00002_ip = 46; continue _fun00001 }
 37:
                report = tangon.onClick;
                if(report) { _fun00002_ip = 54; continue _fun00001 }
 46:
                zuuluu['onClick'] = tangon;
                _fun00002_ip = 78; continue _fun00001;
 54:
                report = tangon.onClick;
                zuuluu['onClick'] = report;
                tangon = tangon.onContextMenu;
                zuuluu['onContextMenu'] = tangon;
 78:
                tangon = zuuluu.onClick;
                if(!(oscard == tangon)) { _fun00002_ip = 158; continue _fun00001 }
 88:
                golfie = _closure1_slot0;
                report = _closure1_slot1;
                tangon = 2;
                report = report[tangon];
                tangon = undefined;
                option = golfie.bind(tangon)(report);
                golfie = option.sanitizeUrl;
                report = michal.target;
                report = golfie.bind(option)(report);
                oscard = oscard != report;
                if(!oscard) { _fun00002_ip = 140; continue _fun00001 }
 137:
                tangon = report;
 140:
                zuuluu['href'] = tangon;
                tangon = '_blank';
                zuuluu['target'] = tangon;
 158:
                report = _closure1_slot2;
                tangon = {};
                oscard = michal.title;
                tangon['title'] = oscard;
                yankee = tangon;
                offset = zuuluu;
                zuuluu = copyDataProperties(yankee, offset);
                oscard = 'noreferrer';
                zuuluu = 'rel';
                tangon[zuuluu] = oscard;
                oscard = michal.content;
                michal = argBar;
                zuuluu = undefined;
                oscard = michal.bind(zuuluu)(oscard, entity);
                michal = 'children';
                tangon[michal] = oscard;
                michal = entity.key;
                entity = 'a';
                entity = report.bind(zuuluu)(entity, tangon, michal);
                return entity;
            }
        };
        michal[tangon] = zuuluu;
        entity['link'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();