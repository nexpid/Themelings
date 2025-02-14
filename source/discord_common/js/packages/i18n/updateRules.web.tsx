// discord_common/js/packages/i18n/updateRules.web.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/i18n/updateRules.web.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: updateRules
        entity = argFoo;
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        mike = 2;
        golf = oscar[mike];
        tango = undefined;
        golf = report.bind(tango)(golf);
        golf = golf.defaultRules;
        golf = golf.heading;
        entity['heading'] = golf;
        golf = oscar[mike];
        golf = report.bind(tango)(golf);
        golf = golf.defaultRules;
        golf = golf.lheading;
        entity['lheading'] = golf;
        mike = oscar[mike];
        mike = report.bind(tango)(mike);
        mike = mike.defaultRules;
        mike = mike.list;
        entity['list'] = mike;
        mike = {};
        options = entity.paragraph;
        verify = mike;
        tango = copyDataProperties(verify, options);
        report = function(argFoo, argBar, argBaz) { // Original name: react
            entity = argBaz;
            report = _closure1_slot2;
            tango = {};
            mike = argFoo;
            oscar = mike.content;
            mike = argBar;
            zulu = undefined;
            mike = mike.bind(zulu)(oscar, entity);
            tango['children'] = mike;
            mike = entity.key;
            entity = 'p';
            entity = report.bind(zulu)(entity, tango, mike);
            return entity;
        };
        tango = 'react';
        mike[tango] = report;
        entity['paragraph'] = mike;
        mike = {};
        options = entity.link;
        verify = mike;
        report = copyDataProperties(verify, options);
        zulu = function(argFoo, argBar, argBaz) { // Original name: react
            _fun6171: for(var _fun6171_ip = 0; ; ) switch(_fun6171_ip) {
 0:
                mike = argFoo;
                entity = argBaz;
                zulu = {};
                tango = mike.context;
                oscar = null;
                if(!(oscar != tango)) { _fun6171_ip = 78; continue _fun6171 }
 19:
                report = mike.context;
                tango = mike.target;
                tango = report[tango];
                if(!tango) { _fun6171_ip = 46; continue _fun6171 }
 37:
                report = tango.onClick;
                if(report) { _fun6171_ip = 54; continue _fun6171 }
 46:
                zulu['onClick'] = tango;
                _fun6171_ip = 78; continue _fun6171;
 54:
                report = tango.onClick;
                zulu['onClick'] = report;
                tango = tango.onContextMenu;
                zulu['onContextMenu'] = tango;
 78:
                tango = zulu.onClick;
                if(!(oscar == tango)) { _fun6171_ip = 158; continue _fun6171 }
 88:
                golf = _closure1_slot0;
                report = _closure1_slot1;
                tango = 2;
                report = report[tango];
                tango = undefined;
                options = golf.bind(tango)(report);
                golf = options.sanitizeUrl;
                report = mike.target;
                report = golf.bind(options)(report);
                oscar = oscar != report;
                if(!oscar) { _fun6171_ip = 140; continue _fun6171 }
 137:
                tango = report;
 140:
                zulu['href'] = tango;
                tango = '_blank';
                zulu['target'] = tango;
 158:
                report = _closure1_slot2;
                tango = {};
                oscar = mike.title;
                tango['title'] = oscar;
                yankee = tango;
                offset = zulu;
                zulu = copyDataProperties(yankee, offset);
                oscar = 'noreferrer';
                zulu = 'rel';
                tango[zulu] = oscar;
                oscar = mike.content;
                mike = argBar;
                zulu = undefined;
                oscar = mike.bind(zulu)(oscar, entity);
                mike = 'children';
                tango[mike] = oscar;
                mike = entity.key;
                entity = 'a';
                entity = report.bind(zulu)(entity, tango, mike);
                return entity;
            }
        };
        mike[tango] = zulu;
        entity['link'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();