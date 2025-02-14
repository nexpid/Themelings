// discord_common/js/packages/shallow-equal/shallowEqual.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/shallow-equal/shallowEqual.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: shallowEqual
        _fun6974: for(var _fun6974_ip = 0; ; ) switch(_fun6974_ip) {
 0:
            backup = argFoo;
            foxtrot = argBar;
            romeo = argBaz;
            tango = argCorge;
            entity = backup === foxtrot;
            if(entity) { _fun6974_ip = 304; continue _fun6974 }
 22:
            zulu = undefined;
            if(!(zulu !== backup)) { _fun6974_ip = 302; continue _fun6974 }
 31:
            if(!(zulu !== foxtrot)) { _fun6974_ip = 302; continue _fun6974 }
 38:
            mike = global;
            oscar = mike.Object;
            report = oscar.keys;
            oscar = report.bind(oscar)(backup);
            golf = mike.Object;
            report = golf.keys;
            report = report.bind(golf)(foxtrot);
            options = oscar.length;
            golf = report.length;
            if(!(options === golf)) { _fun6974_ip = 247; continue _fun6974 }
 89:
            golf = new Array(0);
            verify = oscar.length;
            options = 0;
            offset = options < verify;
            verify = null;
            yankee = 0;
            if(!offset) { _fun6974_ip = 170; continue _fun6974 }
 111:
            kilo = oscar[yankee];
            sizing = backup[kilo];
            offset = foxtrot[kilo];
            if(!(sizing !== offset)) { _fun6974_ip = 158; continue _fun6974 }
 127:
            if(!(verify != romeo)) { _fun6974_ip = 144; continue _fun6974 }
 131:
            offset = romeo.includes;
            offset = offset.bind(romeo)(kilo);
            if(offset) { _fun6974_ip = 158; continue _fun6974 }
 144:
            if(!(verify != tango)) { _fun6974_ip = 243; continue _fun6974 }
 148:
            offset = golf.push;
            offset = offset.bind(golf)(kilo);
 158:
            yankee = yankee + 1;
            offset = oscar.length;
            if(yankee < offset) { _fun6974_ip = 111; continue _fun6974 }
 170:
            verify = verify != tango;
            if(!verify) { _fun6974_ip = 186; continue _fun6974 }
 177:
            offset = golf.length;
            verify = offset > options;
 186:
            if(!verify) { _fun6974_ip = 232; continue _fun6974 }
 189:
            offset = golf.join;
            verify = ', ';
            yankee = offset.bind(golf)(verify);
            verify = mike.HermesInternal;
            offset = verify.concat;
            verify = 'shallowEqual: unequal keys: ';
            verify = offset.bind(verify)(yankee);
            verify = tango.bind(zulu)(verify);
 232:
            golf = golf.length;
            golf = options === golf;
            return golf;
 243:
            golf = false;
            return golf;
 247:
            golf = null;
            if(!(golf != tango)) { _fun6974_ip = 298; continue _fun6974 }
 253:
            options = oscar.length;
            golf = report.length;
            mike = mike.HermesInternal;
            oscar = mike.concat;
            report = 'shallowEqual: unequal key lengths ';
            mike = ' !=== ';
            mike = oscar.bind(report)(options, mike, golf);
            mike = tango.bind(zulu)(mike);
 298:
            mike = false;
            return mike;
 302:
            return entity;
 304:
            entity = true;
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo, argBar) { // Original name: areArraysShallowEqual
        _fun6975: for(var _fun6975_ip = 0; ; ) switch(_fun6975_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            var _closure2_slot0 = zulu;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun6975_ip = 35; continue _fun6975 }
 21:
            report = tango.length;
            zulu = zulu.length;
            entity = report === zulu;
 35:
            if(!entity) { _fun6975_ip = 57; continue _fun6975 }
 38:
            zulu = tango.some;
            mike = function(argFoo, argBar) {
                mike = _closure2_slot0;
                entity = argBar;
                mike = mike[entity];
                entity = argFoo;
                entity = mike !== entity;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            entity = !mike;
 57:
            return entity;
        }
    };
    zulu['areArraysShallowEqual'] = mike;
    return entity;
})();