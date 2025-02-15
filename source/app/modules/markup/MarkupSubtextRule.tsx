// app/modules/markup/MarkupSubtextRule.tsx
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
    entity = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/;
    var _closure1_slot3 = entity;
    mike = {};
    entity = 0;
    options = oscar[entity];
    golf = argBaz;
    entity = undefined;
    golf = golf.bind(entity)(options);
    golf = golf.defaultRules;
    golf = golf.heading;
    golf = golf.order;
    mike['order'] = golf;
    golf = ['-'];
    mike['requiredFirstCharacters'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: match
        _fun61899: for(var _fun61899_ip = 0; ; ) switch(_fun61899_ip) {
 0:
            oscar = argBaz;
            entity = null;
            if(!(entity != oscar)) { _fun61899_ip = 44; continue _fun61899 }
 9:
            mike = '';
            if(!(mike !== oscar)) { _fun61899_ip = 44; continue _fun61899 }
 17:
            zulu = oscar.match;
            mike = _closure1_slot2;
            mike = zulu.bind(oscar)(mike);
            mike = entity != mike;
            entity = null;
            if(!mike) { _fun61899_ip = 96; continue _fun61899 }
 44:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 0;
            zulu = report[zulu];
            report = undefined;
            tango = tango.bind(report)(zulu);
            zulu = tango.anyScopeRegex;
            mike = _closure1_slot3;
            tango = zulu.bind(tango)(mike);
            zulu = argFoo;
            mike = argBar;
            entity = tango.bind(report)(zulu, mike, oscar);
 96:
            return entity;
        }
    };
    mike['match'] = golf;
    tango = function(argFoo, argBar, argBaz) { // Original name: parse
        entity = {};
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 0;
        zulu = zulu[mike];
        mike = undefined;
        oscar = tango.bind(mike)(zulu);
        report = oscar.parseInline;
        zulu = argFoo;
        mike = 1;
        zulu = zulu[mike];
        mike = zulu.trim;
        tango = mike.bind(zulu)();
        zulu = argBar;
        mike = argBaz;
        mike = report.bind(oscar)(zulu, tango, mike);
        entity['content'] = mike;
        return entity;
    };
    mike['parse'] = tango;
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/markup/MarkupSubtextRule.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();