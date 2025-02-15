// app/actions/ContextMenuActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: open
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CONTEXT_MENU_OPEN';
        mike['type'] = report;
        report = argFoo;
        mike['contextMenu'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot4 = entity;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: openContextMenu
        _fun62081: for(var _fun62081_ip = 0; ; ) switch(_fun62081_ip) {
 0:
            oscar = argFoo;
            zulu = argBaz;
            entity = oscar.stopPropagation;
            entity = entity.bind(oscar)();
            entity = oscar.currentTarget;
            entity = entity.contains;
            golf = null;
            if(!(golf != entity)) { _fun62081_ip = 65; continue _fun62081 }
 36:
            report = oscar.currentTarget;
            tango = report.contains;
            entity = oscar.target;
            entity = tango.bind(report)(entity);
            if(!entity) { _fun62081_ip = 494; continue _fun62081 }
 65:
            entity = 'pageX';
            report = entity in oscar;
            offset = 0;
            tango = 0;
            entity = 0;
            if(!report) { _fun62081_ip = 94; continue _fun62081 }
 82:
            tango = oscar.pageX;
            entity = oscar.pageY;
 94:
            verify = tango;
            options = entity;
            if(!(offset === tango)) { _fun62081_ip = 228; continue _fun62081 }
 107:
            verify = tango;
            options = entity;
            if(!(offset === options)) { _fun62081_ip = 228; continue _fun62081 }
 117:
            tango = oscar.target;
            entity = golf == tango;
            foxtrot = undefined;
            yankee = undefined;
            if(entity) { _fun62081_ip = 144; continue _fun62081 }
 134:
            entity = tango.getBoundingClientRect;
            yankee = entity.bind(tango)();
 144:
            if(!(golf == yankee)) { _fun62081_ip = 150; continue _fun62081 }
 148:
            yankee = {};
 150:
            entity = yankee.left;
            tango = 0;
            if(!(foxtrot !== entity)) { _fun62081_ip = 164; continue _fun62081 }
 161:
            tango = entity;
 164:
            entity = yankee.top;
            report = 0;
            if(!(foxtrot !== entity)) { _fun62081_ip = 178; continue _fun62081 }
 175:
            report = entity;
 178:
            romeo = yankee.width;
            entity = 0;
            if(!(foxtrot !== romeo)) { _fun62081_ip = 192; continue _fun62081 }
 189:
            entity = romeo;
 192:
            romeo = yankee.height;
            yankee = 2;
            entity = entity / yankee;
            tango = tango + entity;
            entity = 0;
            if(!(foxtrot !== romeo)) { _fun62081_ip = 217; continue _fun62081 }
 214:
            entity = romeo;
 217:
            entity = entity / yankee;
            options = report + entity;
            verify = tango;
 228:
            report = {};
            entity = argBar;
            report['render'] = entity;
            entity = argCorge;
            report['renderLazy'] = entity;
            entity = oscar.target;
            if(!(golf == entity)) { _fun62081_ip = 264; continue _fun62081 }
 258:
            entity = oscar.currentTarget;
 264:
            report['target'] = entity;
            entity = global;
            entity = entity.DOMRect;
            tango = entity.prototype;
            tango = Object.create(tango, {constructor: {value: entity}});
            echo = tango;
            result = verify;
            output = options;
            sizing = 0;
            kilo = 0;
            entity = new echo[entity](result, output, sizing, kilo, backup);
            entity = entity instanceof Object ? entity : tango;
            report['rect'] = entity;
            options = {};
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 2;
            verify = verify[tango];
            tango = undefined;
            offset = offset.bind(tango)(verify);
            verify = offset.getCurrentlyInteractingAppContext;
            verify = verify.bind(offset)();
            if(!(golf == verify)) { _fun62081_ip = 363; continue _fun62081 }
 353:
            offset = _closure1_slot3;
            verify = offset.APP;
 363:
            options['context'] = verify;
            result = options;
            output = zulu;
            verify = copyDataProperties(result, output);
            report['config'] = options;
            var _closure2_slot0 = report;
            if(!(golf != zulu)) { _fun62081_ip = 433; continue _fun62081 }
 389:
            zulu = zulu.enableSpellCheck;
            if(!zulu) { _fun62081_ip = 433; continue _fun62081 }
 400:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 3;
            zulu = options[zulu];
            golf = golf.bind(tango)(zulu);
            zulu = golf.isDesktop;
            zulu = zulu.bind(golf)();
            if(zulu) { _fun62081_ip = 454; continue _fun62081 }
 433:
            zulu = oscar.preventDefault;
            zulu = zulu.bind(oscar)();
            zulu = _closure1_slot4;
            zulu = zulu.bind(tango)(report);
            _fun62081_ip = 494; continue _fun62081;
 454:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 4;
            entity = report[entity];
            tango = zulu.bind(tango)(entity);
            zulu = tango.addResultListener;
            entity = function() {
                zulu = _closure2_slot1;
                entity = undefined;
                zulu = zulu.bind(entity)();
                zulu = _closure1_slot4;
                mike = _closure2_slot0;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            var _closure2_slot1 = entity;
 494:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    report = report.AppContext;
    var _closure1_slot3 = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/ContextMenuActionCreators.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: closeContextMenu
        entity = undefined;
        return entity;
    };
    zulu['closeContextMenu'] = report;
    zulu['openContextMenu'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: openContextMenuLazy
        report = _closure1_slot5;
        entity = undefined;
        verify = argFoo;
        golf = argBaz;
        oscar = argBar;
        offset = undefined;
        options = undefined;
        mike = offset[report](verify, options, golf, oscar, report);
        return entity;
    };
    zulu['openContextMenuLazy'] = mike;
    return entity;
})();