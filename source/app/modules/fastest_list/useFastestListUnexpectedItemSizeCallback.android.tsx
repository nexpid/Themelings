// app/modules/fastest_list/useFastestListUnexpectedItemSizeCallback.android.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
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
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/fastest_list/useFastestListUnexpectedItemSizeCallback.android.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useFastestListUnexpectedItemSizeCallback
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot2;
        zulu = tango.useCallback;
        mike = new Array(1);
        mike[0] = report;
        entity = function(argFoo) {
            _fun78550: for(var _fun78550_ip = 0; ; ) switch(_fun78550_ip) {
 0:
                entity = argFoo;
                options = entity.nativeEvent;
                entity = _closure2_slot0;
                verify = entity.current;
                entity = options.isSectionHeader;
                if(entity) { _fun78550_ip = 126; continue _fun78550 }
 29:
                entity = options.isSectionFooter;
                if(entity) { _fun78550_ip = 76; continue _fun78550 }
 38:
                tango = verify.renderItem;
                zulu = options.section;
                entity = options.item;
                entity = tango.bind(verify)(zulu, entity);
                zulu = null;
                zulu = zulu != entity;
                report = undefined;
                if(!zulu) { _fun78550_ip = 74; continue _fun78550 }
 71:
                report = entity;
 74:
                _fun78550_ip = 124; continue _fun78550;
 76:
                entity = verify.renderSectionFooter;
                tango = null;
                oscar = tango == entity;
                zulu = undefined;
                if(oscar) { _fun78550_ip = 109; continue _fun78550 }
 93:
                golf = verify.renderSectionFooter;
                oscar = options.section;
                zulu = golf.bind(verify)(oscar);
 109:
                tango = tango != zulu;
                entity = undefined;
                if(!tango) { _fun78550_ip = 121; continue _fun78550 }
 118:
                entity = zulu;
 121:
                report = entity;
 124:
                _fun78550_ip = 174; continue _fun78550;
 126:
                entity = verify.renderSectionHeader;
                tango = null;
                oscar = tango == entity;
                zulu = undefined;
                if(oscar) { _fun78550_ip = 159; continue _fun78550 }
 143:
                golf = verify.renderSectionHeader;
                oscar = options.section;
                zulu = golf.bind(verify)(oscar);
 159:
                tango = tango != zulu;
                entity = undefined;
                if(!tango) { _fun78550_ip = 171; continue _fun78550 }
 168:
                entity = zulu;
 171:
                report = entity;
 174:
                tango = null;
                zulu = tango == report;
                entity = undefined;
                verify = undefined;
                if(zulu) { _fun78550_ip = 192; continue _fun78550 }
 187:
                verify = report.props;
 192:
                oscar = tango == report;
                zulu = undefined;
                if(oscar) { _fun78550_ip = 206; continue _fun78550 }
 201:
                zulu = report.type;
 206:
                offset = 'function';
                report = typeof zulu;
                if(!(offset === report)) { _fun78550_ip = 233; continue _fun78550 }
 217:
                report = zulu.name;
                oscar = report.length;
                report = 0;
                if(!(!(oscar > report))) { _fun78550_ip = 284; continue _fun78550 }
 233:
                oscar = tango == zulu;
                report = undefined;
                if(oscar) { _fun78550_ip = 247; continue _fun78550 }
 242:
                report = zulu.type;
 247:
                golf = typeof report;
                oscar = undefined;
                if(!(offset === golf)) { _fun78550_ip = 282; continue _fun78550 }
 256:
                golf = report.name;
                offset = golf.length;
                golf = 0;
                golf = offset > golf;
                oscar = undefined;
                if(!golf) { _fun78550_ip = 282; continue _fun78550 }
 277:
                oscar = report.name;
 282:
                _fun78550_ip = 289; continue _fun78550;
 284:
                oscar = zulu.name;
 289:
                report = tango == oscar;
                zulu = undefined;
                if(!report) { _fun78550_ip = 330; continue _fun78550 }
 298:
                report = global;
                golf = report.Object;
                report = golf.keys;
                verify = report.bind(golf)(verify);
                golf = verify.join;
                report = ',';
                zulu = golf.bind(verify)(report);
 330:
                report = options.isSectionHeader;
                if(report) { _fun78550_ip = 425; continue _fun78550 }
 339:
                golf = options.isSectionFooter;
                yankee = options.section;
                report = global;
                if(golf) { _fun78550_ip = 396; continue _fun78550 }
 355:
                kilo = options.item;
                golf = report.HermesInternal;
                romeo = golf.concat;
                result = 'Item at section ';
                sizing = ' and index ';
                backup = '.';
                output = yankee;
                golf = result[romeo](output, sizing, kilo, backup, foxtrot);
                _fun78550_ip = 423; continue _fun78550;
 396:
                report = report.HermesInternal;
                offset = report.concat;
                verify = 'Section footer at section ';
                report = '.';
                golf = offset.bind(verify)(yankee, report);
 423:
                _fun78550_ip = 459; continue _fun78550;
 425:
                yankee = options.section;
                report = global;
                report = report.HermesInternal;
                offset = report.concat;
                verify = 'Section header at section ';
                report = '.';
                golf = offset.bind(verify)(yankee, report);
 459:
                report = {};
                output = options.sizeExpected;
                kilo = options.size;
                options = global;
                options = options.HermesInternal;
                yankee = options.concat;
                result = 'Expected item size ';
                sizing = ', but got ';
                backup = '.';
                options = result[yankee](output, sizing, kilo, backup, foxtrot);
                report['detailMessage'] = options;
                report['itemPosition'] = golf;
                golf = tango != oscar;
                tango = 'Unknown component.';
                if(!golf) { _fun78550_ip = 537; continue _fun78550 }
 534:
                tango = oscar;
 537:
                report['itemName'] = tango;
                report['itemProps'] = zulu;
                mike = _closure2_slot0;
                mike = mike.current;
                mike = mike.listId;
                report['listId'] = mike;
                zulu = _closure1_slot0;
                tango = _closure1_slot1;
                mike = 1;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.logFastestListError;
                mike = 'Expected item size mismatch.';
                mike = zulu.bind(tango)(mike, report);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();