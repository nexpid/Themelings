// app/modules/messages/native/renderer/RowGenerator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.RowType;
    var _closure1_slot6 = golf;
    golf = tango.SeparatorType;
    var _closure1_slot7 = golf;
    tango = tango.LoadingType;
    var _closure1_slot8 = tango;
    tango = {'constrainedWidth': 0, 'animatingStickerMessageId': null, 'forcedTheme': null, 'shouldObscureSpoiler': true, 'shouldDisableInteractiveComponents': true, 'shouldFilterKeywords': false};
    golf = 4;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    yankee = golf.DEFAULT_OPTIONS;
    romeo = tango;
    golf = copyDataProperties(romeo, yankee);
    var _closure1_slot9 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: RowManager
            zulu = this;
            report = _closure1_slot3;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            mike = _closure1_slot9;
            zulu['options'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'setOptions';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            zulu = this;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 5;
            tango = tango[entity];
            entity = undefined;
            options = report.bind(entity)(tango);
            golf = options.merge;
            yankee = _closure1_slot9;
            offset = zulu.options;
            romeo = {};
            verify = argFoo;
            foxtrot = options;
            mike = foxtrot[golf](romeo, yankee, offset, verify, options);
            zulu['options'] = mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'generate';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun69007: for(var _fun69007_ip = 0; ; ) switch(_fun69007_ip) {
 0:
                report = argFoo;
                tango = this;
                options = report.rowType;
                entity = tango.options;
                zulu = entity.forcedTheme;
                entity = null;
                if(!(entity == zulu)) { _fun69007_ip = 42; continue _fun69007 }
 29:
                entity = _closure1_slot5;
                zulu = entity.theme;
 42:
                mike = _closure1_slot6;
                mike = mike.BLOCKED_GROUP;
                if(!(mike !== options)) { _fun69007_ip = 377; continue _fun69007 }
 62:
                mike = _closure1_slot6;
                mike = mike.IGNORED_GROUP;
                if(!(mike !== options)) { _fun69007_ip = 377; continue _fun69007 }
 79:
                mike = _closure1_slot6;
                mike = mike.MESSAGE;
                if(!(mike !== options)) { _fun69007_ip = 335; continue _fun69007 }
 96:
                mike = _closure1_slot6;
                mike = mike.UPLOAD_PROGRESS;
                if(!(mike !== options)) { _fun69007_ip = 293; continue _fun69007 }
 113:
                mike = _closure1_slot7;
                mike = mike.DAY;
                if(!(mike !== options)) { _fun69007_ip = 257; continue _fun69007 }
 130:
                mike = _closure1_slot7;
                mike = mike.UNREAD;
                if(!(mike !== options)) { _fun69007_ip = 257; continue _fun69007 }
 144:
                mike = _closure1_slot7;
                mike = mike.SUMMARY;
                if(!(mike !== options)) { _fun69007_ip = 257; continue _fun69007 }
 158:
                mike = _closure1_slot8;
                mike = mike.LOAD_BEFORE;
                if(!(mike !== options)) { _fun69007_ip = 221; continue _fun69007 }
 172:
                mike = _closure1_slot8;
                mike = mike.LOAD_AFTER;
                if(!(mike !== options)) { _fun69007_ip = 221; continue _fun69007 }
 186:
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 11;
                oscar = oscar[mike];
                mike = undefined;
                golf = golf.bind(mike)(oscar);
                oscar = golf.assertNever;
                oscar = oscar.bind(golf)(options);
                return mike;
 221:
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 10;
                oscar = oscar[mike];
                mike = undefined;
                oscar = golf.bind(mike)(oscar);
                mike = oscar.generateLoadingRowData;
                mike = mike.bind(oscar)(report, zulu);
                return mike;
 257:
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 9;
                oscar = oscar[mike];
                mike = undefined;
                oscar = golf.bind(mike)(oscar);
                mike = oscar.generateSeparatorRowData;
                mike = mike.bind(oscar)(report, zulu);
                return mike;
 293:
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 8;
                oscar = oscar[mike];
                mike = undefined;
                golf = golf.bind(mike)(oscar);
                oscar = golf.generateUploadProgressRowData;
                mike = tango.options;
                mike = oscar.bind(golf)(report, mike, zulu);
                return mike;
 335:
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 7;
                oscar = oscar[mike];
                mike = undefined;
                golf = golf.bind(mike)(oscar);
                oscar = golf.generateMessageRowData;
                mike = tango.options;
                mike = oscar.bind(golf)(report, mike, zulu);
                return mike;
 377:
                oscar = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                mike = oscar.bind(entity)(mike);
                entity = mike.generateBlockedGroupRowData;
                entity = entity.bind(mike)(report, zulu, tango);
                return entity;
            }
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/RowGenerator.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();