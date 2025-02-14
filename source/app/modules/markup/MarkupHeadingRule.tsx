// app/modules/markup/MarkupHeadingRule.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = /\n$/;
    var _closure1_slot2 = entity;
    mike = {};
    entity = 0;
    options = oscar[entity];
    golf = argBaz;
    entity = undefined;
    golf = golf.bind(entity)(options);
    golf = golf.defaultRules;
    offset = golf.heading;
    yankee = mike;
    golf = copyDataProperties(yankee, offset);
    options = [' ', '#'];
    golf = 'requiredFirstCharacters';
    mike[golf] = options;
    golf = function(argFoo, argBar, argBaz) { // Original name: match
        _fun61889: for(var _fun61889_ip = 0; ; ) switch(_fun61889_ip) {
 0:
            oscar = argBar;
            report = argBaz;
            mike = oscar.allowHeading;
            zulu = null;
            entity = null;
            if(!mike) { _fun61889_ip = 117; continue _fun61889 }
 19:
            if(!(zulu != report)) { _fun61889_ip = 58; continue _fun61889 }
 23:
            mike = '';
            if(!(mike !== report)) { _fun61889_ip = 58; continue _fun61889 }
 31:
            tango = report.match;
            mike = _closure1_slot2;
            mike = tango.bind(report)(mike);
            mike = zulu != mike;
            entity = null;
            if(!mike) { _fun61889_ip = 117; continue _fun61889 }
 58:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 0;
            mike = tango[mike];
            tango = undefined;
            golf = zulu.bind(tango)(mike);
            zulu = golf.anyScopeRegex;
            mike = /^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/;
            zulu = zulu.bind(golf)(mike);
            mike = argFoo;
            entity = zulu.bind(tango)(mike, oscar, report);
 117:
            return entity;
        }
    };
    tango = 'match';
    mike[tango] = golf;
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/markup/MarkupHeadingRule.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();