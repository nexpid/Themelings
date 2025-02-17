// app/utils/ChangeLogUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    report = function(argFoo) { // Original name: getDefaultRules
        entity = {};
        tango = _closure1_slot13;
        zulu = undefined;
        mike = argFoo;
        report = tango.bind(zulu)(mike);
        oscar = entity;
        mike = copyDataProperties(oscar, report);
        return entity;
    };
    var _closure1_slot16 = report;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    tango = 0;
    verify = golf[tango];
    entity = undefined;
    verify = options.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.lheading;
    var _closure1_slot3 = verify;
    verify = golf[tango];
    verify = options.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.heading;
    var _closure1_slot4 = verify;
    verify = golf[tango];
    verify = options.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.link;
    var _closure1_slot5 = verify;
    verify = golf[tango];
    verify = options.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.image;
    var _closure1_slot6 = verify;
    verify = golf[tango];
    verify = options.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.list;
    var _closure1_slot7 = verify;
    verify = golf[tango];
    verify = options.bind(entity)(verify);
    verify = verify.defaultRules;
    verify = verify.blockQuote;
    var _closure1_slot8 = verify;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    tango = tango.defaultRules;
    tango = tango.paragraph;
    var _closure1_slot9 = tango;
    tango = /\{(.+?)}/;
    var _closure1_slot10 = tango;
    tango = /^\$(\w+?)\$/;
    var _closure1_slot11 = tango;
    tango = function(argFoo) { // Original name: parseWithClassNameExtraction
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            mike = mike.transformUpperCase;
            zulu = undefined;
            if(!(mike === zulu)) { _fun00002_ip = 19; continue _fun00001 }
 17:
            mike = false;
 19:
            var _closure2_slot0 = mike;
            entity = function(argFoo, argBar, argBaz) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    options = _closure1_slot10;
                    zulu = options.exec;
                    tango = 1;
                    entity = report[tango];
                    golf = zulu.bind(options)(entity);
                    oscar = report[tango];
                    zulu = oscar.replace;
                    entity = '';
                    zulu = zulu.bind(oscar)(options, entity);
                    entity = _closure2_slot0;
                    oscar = zulu;
                    if(!entity) { _fun00004_ip = 70; continue _fun00003 }
 60:
                    entity = zulu.toUpperCase;
                    oscar = entity.bind(zulu)();
 70:
                    entity = {};
                    zulu = null;
                    options = zulu != golf;
                    if(!options) { _fun00004_ip = 85; continue _fun00003 }
 81:
                    zulu = golf[tango];
 85:
                    entity['className'] = zulu;
                    zulu = 2;
                    golf = report[zulu];
                    report = '=';
                    if(!(report === golf)) { _fun00004_ip = 108; continue _fun00003 }
 105:
                    zulu = tango;
 108:
                    entity['level'] = zulu;
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 0;
                    zulu = zulu[mike];
                    mike = undefined;
                    report = tango.bind(mike)(zulu);
                    tango = report.parseInline;
                    zulu = argBar;
                    mike = argBaz;
                    mike = tango.bind(report)(zulu, oscar, mike);
                    entity['content'] = mike;
                    return entity;
                }
            };
            return entity;
        }
    };
    var _closure1_slot12 = tango;
    tango = function(argFoo) { // Original name: defaultRules
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscar = argFoo;
            entity = {};
            report = _closure1_slot0;
            mike = _closure1_slot2;
            options = 1;
            verify = mike[options];
            golf = undefined;
            verify = report.bind(golf)(verify);
            romeo = verify.baseRules;
            foxtrot = entity;
            verify = copyDataProperties(foxtrot, romeo);
            verify = {};
            romeo = _closure1_slot6;
            foxtrot = verify;
            offset = copyDataProperties(foxtrot, romeo);
            mike = mike[options];
            mike = report.bind(golf)(mike);
            mike = mike.customRules;
            mike = mike.image;
            report = 'function';
            mike = typeof mike;
            if(!(report !== mike)) { _fun00006_ip = 121; continue _fun00005 }
 90:
            offset = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = offset.bind(golf)(mike);
            mike = mike.customRules;
            mike = mike.image;
            _fun00006_ip = 155; continue _fun00005;
 121:
            yankee = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[options];
            offset = yankee.bind(golf)(offset);
            yankee = offset.customRules;
            offset = yankee.image;
            mike = offset.bind(yankee)(oscar);
 155:
            foxtrot = verify;
            romeo = mike;
            mike = copyDataProperties(foxtrot, romeo);
            mike = 'image';
            entity[mike] = verify;
            verify = {};
            romeo = _closure1_slot5;
            foxtrot = verify;
            mike = copyDataProperties(foxtrot, romeo);
            offset = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = offset.bind(golf)(mike);
            mike = mike.customRules;
            mike = mike.link;
            mike = typeof mike;
            if(!(report !== mike)) { _fun00006_ip = 254; continue _fun00005 }
 223:
            offset = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = offset.bind(golf)(mike);
            mike = mike.customRules;
            mike = mike.link;
            _fun00006_ip = 288; continue _fun00005;
 254:
            yankee = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[options];
            offset = yankee.bind(golf)(offset);
            yankee = offset.customRules;
            offset = yankee.link;
            mike = offset.bind(yankee)(oscar);
 288:
            foxtrot = verify;
            romeo = mike;
            mike = copyDataProperties(foxtrot, romeo);
            mike = 'link';
            entity[mike] = verify;
            verify = {};
            romeo = _closure1_slot7;
            foxtrot = verify;
            mike = copyDataProperties(foxtrot, romeo);
            offset = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = offset.bind(golf)(mike);
            mike = mike.customRules;
            mike = mike.list;
            mike = typeof mike;
            if(!(report !== mike)) { _fun00006_ip = 387; continue _fun00005 }
 356:
            offset = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = offset.bind(golf)(mike);
            mike = mike.customRules;
            mike = mike.list;
            _fun00006_ip = 421; continue _fun00005;
 387:
            yankee = _closure1_slot0;
            offset = _closure1_slot2;
            offset = offset[options];
            offset = yankee.bind(golf)(offset);
            yankee = offset.customRules;
            offset = yankee.list;
            mike = offset.bind(yankee)(oscar);
 421:
            foxtrot = verify;
            romeo = mike;
            mike = copyDataProperties(foxtrot, romeo);
            mike = 'list';
            entity[mike] = verify;
            verify = {};
            yankee = _closure1_slot1;
            mike = _closure1_slot2;
            offset = 2;
            offset = mike[offset];
            offset = yankee.bind(golf)(offset);
            offset = offset.order;
            verify['order'] = offset;
            offset = function(argFoo) { // Original name: match
                zulu = _closure1_slot11;
                mike = zulu.exec;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify['match'] = offset;
            offset = function(argFoo, argBar, argBaz) { // Original name: parse
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = argFoo;
                    entity = argBaz;
                    mike = entity.interpolations;
                    entity = 1;
                    entity = tango[entity];
                    mike = mike[entity];
                    entity = null;
                    if(!(entity != mike)) { _fun00008_ip = 50; continue _fun00007 }
 31:
                    entity = {};
                    zulu = 'interpolation';
                    entity['type'] = zulu;
                    entity['renderer'] = mike;
                    _fun00008_ip = 73; continue _fun00007;
 50:
                    mike = {};
                    zulu = 'text';
                    mike['type'] = zulu;
                    zulu = 0;
                    zulu = tango[zulu];
                    mike['content'] = zulu;
                    entity = mike;
 73:
                    return entity;
                }
            };
            verify['parse'] = offset;
            zulu = function(argFoo) { // Original name: react
                mike = argFoo;
                entity = mike.renderer;
                entity = entity.bind(mike)();
                return entity;
            };
            verify['react'] = zulu;
            zulu = 'interpolation';
            entity[zulu] = verify;
            zulu = {};
            romeo = _closure1_slot3;
            foxtrot = zulu;
            verify = copyDataProperties(foxtrot, romeo);
            offset = _closure1_slot12;
            verify = {};
            yankee = true;
            verify['transformUpperCase'] = yankee;
            offset = offset.bind(golf)(verify);
            verify = 'parse';
            zulu[verify] = offset;
            verify = _closure1_slot0;
            mike = mike[options];
            mike = verify.bind(golf)(mike);
            mike = mike.customRules;
            mike = mike.lheading;
            mike = typeof mike;
            if(!(report !== mike)) { _fun00006_ip = 617; continue _fun00005 }
 586:
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = verify.bind(golf)(mike);
            mike = mike.customRules;
            mike = mike.lheading;
            _fun00006_ip = 651; continue _fun00005;
 617:
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[options];
            verify = offset.bind(golf)(verify);
            offset = verify.customRules;
            verify = offset.lheading;
            mike = verify.bind(offset)(oscar);
 651:
            foxtrot = zulu;
            romeo = mike;
            mike = copyDataProperties(foxtrot, romeo);
            mike = 'lheading';
            entity[mike] = zulu;
            zulu = {};
            romeo = _closure1_slot4;
            foxtrot = zulu;
            mike = copyDataProperties(foxtrot, romeo);
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = verify.bind(golf)(mike);
            mike = mike.customRules;
            mike = mike.heading;
            mike = typeof mike;
            if(!(report !== mike)) { _fun00006_ip = 750; continue _fun00005 }
 719:
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = verify.bind(golf)(mike);
            mike = mike.customRules;
            mike = mike.heading;
            _fun00006_ip = 784; continue _fun00005;
 750:
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[options];
            verify = offset.bind(golf)(verify);
            offset = verify.customRules;
            verify = offset.heading;
            mike = verify.bind(offset)(oscar);
 784:
            foxtrot = zulu;
            romeo = mike;
            mike = copyDataProperties(foxtrot, romeo);
            mike = 'heading';
            entity[mike] = zulu;
            zulu = {};
            romeo = _closure1_slot8;
            foxtrot = zulu;
            mike = copyDataProperties(foxtrot, romeo);
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = verify.bind(golf)(mike);
            mike = mike.customRules;
            mike = mike.blockQuote;
            mike = typeof mike;
            if(!(report !== mike)) { _fun00006_ip = 883; continue _fun00005 }
 852:
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = verify.bind(golf)(mike);
            mike = mike.customRules;
            mike = mike.blockQuote;
            _fun00006_ip = 917; continue _fun00005;
 883:
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[options];
            verify = offset.bind(golf)(verify);
            offset = verify.customRules;
            verify = offset.blockQuote;
            mike = verify.bind(offset)(oscar);
 917:
            foxtrot = zulu;
            romeo = mike;
            mike = copyDataProperties(foxtrot, romeo);
            mike = 'blockQuote';
            entity[mike] = zulu;
            zulu = {};
            romeo = _closure1_slot9;
            foxtrot = zulu;
            mike = copyDataProperties(foxtrot, romeo);
            verify = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = verify.bind(golf)(mike);
            mike = mike.customRules;
            mike = mike.paragraph;
            mike = typeof mike;
            if(!(report !== mike)) { _fun00006_ip = 1016; continue _fun00005 }
 985:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = report.bind(golf)(mike);
            mike = mike.customRules;
            mike = mike.paragraph;
            _fun00006_ip = 1050; continue _fun00005;
 1016:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[options];
            tango = report.bind(golf)(tango);
            report = tango.customRules;
            tango = report.paragraph;
            mike = tango.bind(report)(oscar);
 1050:
            foxtrot = zulu;
            romeo = mike;
            mike = copyDataProperties(foxtrot, romeo);
            mike = 'paragraph';
            entity[mike] = zulu;
            return entity;
        }
    };
    var _closure1_slot13 = tango;
    tango = function(argFoo) { // Original name: specialRules
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = {};
            mike = {};
            options = _closure1_slot3;
            verify = mike;
            zulu = copyDataProperties(verify, options);
            report = _closure1_slot12;
            zulu = {};
            oscar = false;
            zulu['transformUpperCase'] = oscar;
            oscar = undefined;
            report = report.bind(oscar)(zulu);
            zulu = 'parse';
            mike[zulu] = report;
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            golf = 1;
            zulu = zulu[golf];
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.customRules;
            zulu = zulu.lheading;
            report = 'function';
            zulu = typeof zulu;
            if(!(report !== zulu)) { _fun00010_ip = 121; continue _fun00009 }
 90:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            zulu = report.bind(oscar)(zulu);
            zulu = zulu.customRules;
            zulu = zulu.lheading;
            _fun00010_ip = 158; continue _fun00009;
 121:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[golf];
            tango = report.bind(oscar)(tango);
            oscar = tango.customRules;
            report = oscar.lheading;
            tango = argFoo;
            zulu = report.bind(oscar)(tango);
 158:
            verify = mike;
            options = zulu;
            zulu = copyDataProperties(verify, options);
            entity['lheading'] = mike;
            return entity;
        }
    };
    var _closure1_slot14 = tango;
    tango = function(argFoo) { // Original name: messageRules
        entity = {};
        report = _closure1_slot13;
        tango = undefined;
        zulu = argFoo;
        golf = report.bind(tango)(zulu);
        options = entity;
        zulu = copyDataProperties(options, golf);
        oscar = {};
        zulu = _closure1_slot1;
        report = _closure1_slot2;
        mike = 0;
        mike = report[mike];
        mike = zulu.bind(tango)(mike);
        mike = mike.defaultRules;
        golf = mike.newline;
        options = oscar;
        mike = copyDataProperties(options, golf);
        mike = 'newline';
        entity[mike] = oscar;
        mike = 2;
        mike = report[mike];
        oscar = zulu.bind(tango)(mike);
        mike = 'text';
        entity[mike] = oscar;
        mike = 3;
        mike = report[mike];
        oscar = zulu.bind(tango)(mike);
        mike = 'list';
        entity[mike] = oscar;
        mike = 4;
        mike = report[mike];
        zulu = zulu.bind(tango)(mike);
        mike = 'subtext';
        entity[mike] = zulu;
        return entity;
    };
    var _closure1_slot15 = tango;
    tango = {};
    tango['getDefaultRules'] = report;
    report = function(argFoo) { // Original name: getSpecialRules
        tango = argFoo;
        entity = {};
        report = _closure1_slot13;
        zulu = undefined;
        oscar = report.bind(zulu)(tango);
        golf = entity;
        report = copyDataProperties(golf, oscar);
        mike = _closure1_slot14;
        oscar = mike.bind(zulu)(tango);
        golf = entity;
        mike = copyDataProperties(golf, oscar);
        return entity;
    };
    tango['getSpecialRules'] = report;
    report = function(argFoo) { // Original name: getMessageRules
        entity = {};
        tango = _closure1_slot15;
        zulu = undefined;
        mike = argFoo;
        report = tango.bind(zulu)(mike);
        oscar = entity;
        mike = copyDataProperties(oscar, report);
        return entity;
    };
    tango['getMessageRules'] = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/ChangeLogUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: renderChangelogMessageMarkup
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            options = argBaz;
            entity = {};
            oscar = false;
            entity['hasSpoilerEmbeds'] = oscar;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 5;
            zulu = report[zulu];
            report = undefined;
            tango = tango.bind(report)(zulu);
            zulu = tango.reactParserFor;
            golf = _closure1_slot16;
            mike = argBar;
            mike = golf.bind(report)(mike);
            tango = zulu.bind(tango)(mike);
            mike = argFoo;
            zulu = mike.content;
            mike = null;
            if(!(mike == options)) { _fun00012_ip = 78; continue _fun00011 }
 74:
            mike = {};
            _fun00012_ip = 88; continue _fun00011;
 78:
            golf = {};
            golf['changeLog'] = options;
            mike = golf;
 88:
            mike = tango.bind(report)(zulu, oscar, mike);
            entity['content'] = mike;
            return entity;
        }
    };
    zulu['renderChangelogMessageMarkup'] = mike;
    return entity;
})();