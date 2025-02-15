// app/modules/guilds_bar/GuildsTree.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    report = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = report;
    var _closure1_slot2 = options;
    entity = function() { // Original name: randomFolderId
        entity = global;
        zulu = entity.Math;
        mike = zulu.floor;
        tango = entity.Math;
        entity = tango.random;
        tango = entity.bind(tango)();
        entity = 4294967296.0;
        entity = entity * tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = options[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    report = {};
    tango = 'root';
    report['ROOT'] = tango;
    tango = 'folder';
    report['FOLDER'] = tango;
    tango = 'guild';
    report['GUILD'] = tango;
    var _closure1_slot5 = report;
    tango = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: GuildsTree
            zulu = this;
            report = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            mike = report.bind(entity)(zulu, mike);
            mike = {};
            tango = _closure1_slot5;
            tango = tango.ROOT;
            mike['type'] = tango;
            tango = new Array(0);
            mike['children'] = tango;
            zulu['root'] = mike;
            mike = {};
            zulu['nodes'] = mike;
            mike = 0;
            zulu['version'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'getSnapshot';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = this;
                mike = {};
                offset = tango.nodes;
                oscar = undefined;
                report = 'children';
                entity = 'childrenIds';
                for(golf in offset)
 31:
                {
 40:
                    foxtrot = golf;
                    romeo = tango.nodes;
                    backup = romeo[foxtrot];
                    romeo = {};
                    result = romeo;
                    output = backup;
                    kilo = copyDataProperties(result, output);
                    romeo[report] = oscar;
                    sizing = backup.children;
                    kilo = sizing.map;
                    backup = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    backup = kilo.bind(sizing)(backup);
                    romeo[entity] = backup;
                    mike[foxtrot] = romeo;
                    _fun00002_ip = 31; continue _fun00001;
                }
 101:
                entity = {};
                tango = tango.root;
                report = tango.children;
                tango = report.map;
                zulu = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                zulu = tango.bind(report)(zulu);
                entity['rootChildrenIds'] = zulu;
                entity['nodes'] = mike;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(15);
        mike[0] = entity;
        entity = {};
        oscar = 'loadSnapshot';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tango = argFoo;
                mike = this;
                var _closure3_slot0 = mike;
                zulu = tango.nodes;
                mike['nodes'] = zulu;
                golf = mike.nodes;
                for(zulu in golf)
 38:
                {
 47:
                    offset = zulu;
                    verify = mike.nodes;
                    verify = verify[offset];
                    romeo = verify.childrenIds;
                    yankee = romeo.map;
                    offset = function(argFoo) {
                        entity = _closure3_slot0;
                        mike = entity.nodes;
                        entity = argFoo;
                        entity = mike[entity];
                        return entity;
                    };
                    offset = yankee.bind(romeo)(offset);
                    verify['children'] = offset;
                    verify = delete verify.childrenIds;
                    _fun00004_ip = 38; continue _fun00003;
                }
 94:
                zulu = mike.root;
                report = tango.rootChildrenIds;
                tango = report.map;
                entity = function(argFoo) {
                    entity = _closure3_slot0;
                    mike = entity.nodes;
                    entity = argFoo;
                    entity = mike[entity];
                    return entity;
                };
                entity = tango.bind(report)(entity);
                zulu['children'] = entity;
                entity = mike.version;
                entity = entity + 1;
                mike['version'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'moveNextTo';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = argFoo;
                yankee = argBar;
                report = arguments[2];
                entity = this;
                offset = undefined;
                if(!(report === offset)) { _fun00006_ip = 20; continue _fun00005 }
 18:
                report = false;
 20:
                mike = entity._pluckNode;
                mike = mike.bind(entity)(zulu);
                tango = yankee.parentId;
                mike = null;
                if(!(mike == tango)) { _fun00006_ip = 51; continue _fun00005 }
 43:
                mike = entity.root;
                _fun00006_ip = 67; continue _fun00005;
 51:
                oscar = entity.nodes;
                tango = yankee.parentId;
                mike = oscar[tango];
 67:
                oscar = mike.children;
                tango = oscar.indexOf;
                options = tango.bind(oscar)(yankee);
                golf = _closure1_slot1;
                tango = _closure1_slot2;
                verify = 2;
                tango = tango[verify];
                foxtrot = golf.bind(offset)(tango);
                golf = zulu.type;
                tango = _closure1_slot5;
                tango = tango.FOLDER;
                golf = golf === tango;
                if(!golf) { _fun00006_ip = 146; continue _fun00005 }
 127:
                romeo = mike.type;
                tango = _closure1_slot5;
                tango = tango.FOLDER;
                golf = romeo === tango;
 146:
                control = zulu.id;
                update = mike.id;
                tango = global;
                romeo = tango.HermesInternal;
                sizing = romeo.concat;
                vacuum = '[GUILDS TREE] Tried moving a folder (';
                source = ') inside of another folder (';
                kilo = ')';
                echo = kilo;
                romeo = vacuum[sizing](control, source, update, echo, result);
                golf = !golf;
                golf = foxtrot.bind(offset)(golf, romeo);
                golf = _closure1_slot1;
                oscar = _closure1_slot2;
                oscar = oscar[verify];
                verify = golf.bind(offset)(oscar);
                golf = 0;
                oscar = options >= golf;
                control = yankee.id;
                update = yankee.parentId;
                tango = tango.HermesInternal;
                romeo = tango.concat;
                vacuum = '[GUILDS TREE] target node (';
                source = ') did not exist within its specified parent (';
                tango = vacuum[romeo](control, source, update, echo, result);
                tango = verify.bind(offset)(oscar, tango);
                tango = 0;
                if(!report) { _fun00006_ip = 276; continue _fun00005 }
 273:
                tango = 1;
 276:
                source = mike.children;
                report = new Array(0);
                control = report;
                update = 0;
                oscar = arraySpread(control, source, update);
                mike['children'] = report;
                oscar = mike.children;
                report = oscar.splice;
                tango = options + tango;
                tango = report.bind(oscar)(tango, golf, zulu);
                mike = mike.id;
                zulu['parentId'] = mike;
                mike = entity.version;
                mike = mike + 1;
                entity['version'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'moveInto';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = argFoo;
                mike = argBar;
                tango = arguments[2];
                entity = this;
                report = undefined;
                if(!(tango === report)) { _fun00008_ip = 20; continue _fun00007 }
 18:
                tango = true;
 20:
                report = entity._pluckNode;
                report = report.bind(entity)(zulu);
                golf = 0;
                oscar = 0;
                if(!tango) { _fun00008_ip = 48; continue _fun00007 }
 38:
                tango = mike.children;
                oscar = tango.length;
 48:
                verify = mike.children;
                tango = new Array(0);
                offset = tango;
                options = 0;
                report = arraySpread(offset, verify, options);
                mike['children'] = tango;
                report = mike.children;
                tango = report.splice;
                tango = tango.bind(report)(oscar, golf, zulu);
                mike = mike.id;
                zulu['parentId'] = mike;
                mike = entity.version;
                mike = mike + 1;
                entity['version'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'addNode';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                tango = arguments[1];
                zulu = arguments[2];
                mike = this;
                options = undefined;
                if(!(tango === options)) { _fun00010_ip = 24; continue _fun00009 }
 18:
                tango = mike.root;
 24:
                if(!(zulu === options)) { _fun00010_ip = 30; continue _fun00009 }
 28:
                zulu = true;
 30:
                golf = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 2;
                offset = verify[entity];
                yankee = golf.bind(options)(offset);
                offset = report.type;
                oscar = _closure1_slot5;
                oscar = oscar.ROOT;
                offset = offset !== oscar;
                oscar = '[GUILDS TREE] Tried adding another root node into the tree';
                oscar = yankee.bind(options)(offset, oscar);
                oscar = verify[entity];
                romeo = golf.bind(options)(oscar);
                offset = report.id;
                oscar = null;
                yankee = oscar != offset;
                offset = '[GUILDS TREE] Tried adding a node without an id';
                offset = romeo.bind(options)(yankee, offset);
                entity = verify[entity];
                golf = golf.bind(options)(entity);
                verify = mike.nodes;
                entity = report.id;
                entity = verify[entity];
                oscar = oscar == entity;
                yankee = report.id;
                entity = global;
                entity = entity.HermesInternal;
                offset = entity.concat;
                verify = '[GUILDS TREE] Tried adding a node that already exists (';
                entity = ')';
                entity = offset.bind(verify)(yankee, entity);
                entity = golf.bind(options)(oscar, entity);
                oscar = mike.nodes;
                entity = report.id;
                oscar[entity] = report;
                entity = mike.version;
                entity = entity + 1;
                mike['version'] = entity;
                entity = mike.moveInto;
                entity = entity.bind(mike)(report, tango, zulu);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'removeNode';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 2;
            golf = oscar[tango];
            zulu = undefined;
            verify = report.bind(zulu)(golf);
            golf = entity.root;
            options = mike !== golf;
            golf = '[GUILDS TREE] Tried removing the root node from the tree';
            golf = verify.bind(zulu)(options, golf);
            tango = oscar[tango];
            oscar = report.bind(zulu)(tango);
            report = mike.id;
            tango = null;
            report = tango != report;
            tango = '[GUILDS TREE] Tried removing a node without an id';
            tango = oscar.bind(zulu)(report, tango);
            tango = entity._pluckNode;
            tango = tango.bind(entity)(mike);
            mike['parentId'] = zulu;
            zulu = entity.nodes;
            mike = mike.id;
            mike = delete zulu[mike];
            mike = entity.version;
            mike = mike + 1;
            entity['version'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'replaceNode';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = argFoo;
                tango = argBar;
                entity = this;
                verify = _closure1_slot1;
                report = _closure1_slot2;
                options = 2;
                golf = report[options];
                zulu = undefined;
                romeo = verify.bind(zulu)(golf);
                offset = mike.id;
                golf = null;
                yankee = golf != offset;
                offset = '[GUILDS TREE] Tried replacing a node without an id';
                offset = romeo.bind(zulu)(yankee, offset);
                report = report[options];
                offset = verify.bind(zulu)(report);
                report = tango.id;
                verify = golf != report;
                report = '[GUILDS TREE] Tried replacing a node with one that does not have an id';
                report = offset.bind(zulu)(verify, report);
                report = mike.parentId;
                if(!(golf == report)) { _fun00012_ip = 105; continue _fun00011 }
 97:
                report = entity.root;
                _fun00012_ip = 121; continue _fun00011;
 105:
                verify = entity.nodes;
                golf = mike.parentId;
                report = verify[golf];
 121:
                verify = report.children;
                golf = verify.indexOf;
                verify = golf.bind(verify)(mike);
                golf = _closure1_slot1;
                oscar = _closure1_slot2;
                oscar = oscar[options];
                offset = golf.bind(zulu)(oscar);
                options = 0;
                golf = verify >= options;
                echo = mike.id;
                output = mike.parentId;
                oscar = global;
                oscar = oscar.HermesInternal;
                foxtrot = oscar.concat;
                update = '[GUILDS TREE] existing node (';
                result = ') did not exist within its specified parent (';
                sizing = ')';
                oscar = update[foxtrot](echo, result, output, sizing, kilo);
                oscar = offset.bind(zulu)(golf, oscar);
                result = report.children;
                oscar = new Array(0);
                echo = oscar;
                output = 0;
                golf = arraySpread(echo, result, output);
                report['children'] = oscar;
                options = report.children;
                golf = options.splice;
                oscar = 1;
                oscar = golf.bind(options)(verify, oscar, tango);
                report = report.id;
                tango['parentId'] = report;
                mike['parentId'] = zulu;
                zulu = entity.nodes;
                mike = mike.id;
                mike = delete zulu[mike];
                zulu = entity.nodes;
                mike = tango.id;
                zulu[mike] = tango;
                mike = entity.version;
                mike = mike + 1;
                entity['version'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'cloneNode';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.clone;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'convertToFolder';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                zulu = this;
                entity = _closure1_slot6;
                golf = undefined;
                mike = entity.bind(golf)();
                entity = zulu.getNode;
                entity = entity.bind(zulu)(mike);
                oscar = null;
                if(!(oscar != entity)) { _fun00014_ip = 62; continue _fun00013 }
 36:
                entity = _closure1_slot6;
                options = entity.bind(golf)();
                entity = zulu.getNode;
                entity = entity.bind(zulu)(options);
                mike = options;
                if(oscar != entity) { _fun00014_ip = 36; continue _fun00013 }
 62:
                entity = {};
                tango = _closure1_slot5;
                tango = tango.FOLDER;
                entity['type'] = tango;
                entity['id'] = mike;
                tango = false;
                entity['expanded'] = tango;
                mike = new Array(0);
                entity['children'] = mike;
                mike = zulu.replaceNode;
                mike = mike.bind(zulu)(report, entity);
                mike = zulu.removeNode;
                mike = mike.bind(zulu)(report);
                mike = zulu.addNode;
                mike = mike.bind(zulu)(report, entity, tango);
                mike = zulu.version;
                mike = mike + 1;
                zulu['version'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'allNodes';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = global;
            zulu = entity.Object;
            mike = zulu.values;
            entity = this;
            entity = entity.nodes;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'getNode';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            mike = entity.nodes;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'getRoots';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.root;
            entity = entity.children;
            return entity;
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'size';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            mike = this;
            entity = mike.allNodes;
            entity = entity.bind(mike)();
            entity = entity.length;
            return entity;
        };
        entity['get'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'sortedGuildNodes';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = function(argFoo) { // Original name: collectChildren
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.type;
                    entity = _closure1_slot5;
                    entity = entity.GUILD;
                    if(!(mike !== entity)) { _fun00016_ip = 76; continue _fun00015 }
 25:
                    mike = zulu.children;
                    entity = null;
                    if(!(entity != mike)) { _fun00016_ip = 70; continue _fun00015 }
 36:
                    tango = zulu.children;
                    mike = tango.map;
                    entity = function(argFoo) {
                        zulu = _closure3_slot0;
                        mike = undefined;
                        entity = argFoo;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    mike = mike.bind(tango)(entity);
                    entity = mike.flat;
                    entity = entity.bind(mike)();
                    _fun00016_ip = 74; continue _fun00015;
 70:
                    entity = new Array(0);
 74:
                    _fun00016_ip = 87; continue _fun00015;
 76:
                    mike = new Array(1);
                    mike[0] = zulu;
                    entity = mike;
 87:
                    return entity;
                }
            };
            var _closure3_slot0 = zulu;
            entity = this;
            mike = entity.root;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[13] = entity;
        entity = {};
        oscar = '_pluckNode';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                mike = argFoo;
                zulu = this;
                var _closure3_slot0 = mike;
                entity = mike.parentId;
                options = null;
                if(!(options == entity)) { _fun00018_ip = 32; continue _fun00017 }
 24:
                report = zulu.root;
                _fun00018_ip = 48; continue _fun00017;
 32:
                oscar = zulu.nodes;
                entity = mike.parentId;
                report = oscar[entity];
 48:
                offset = _closure1_slot1;
                yankee = _closure1_slot2;
                verify = 2;
                oscar = yankee[verify];
                entity = undefined;
                kilo = offset.bind(entity)(oscar);
                romeo = options != report;
                control = mike.id;
                update = mike.parentId;
                oscar = global;
                golf = oscar.HermesInternal;
                sizing = golf.concat;
                backup = '[GUILDS TREE] source node (';
                foxtrot = ') had a parent id (';
                echo = ") which doesn't exist in the tree";
                vacuum = backup;
                source = foxtrot;
                golf = vacuum[sizing](control, source, update, echo, result);
                golf = kilo.bind(entity)(romeo, golf);
                golf = report.children;
                verify = yankee[verify];
                verify = offset.bind(entity)(verify);
                options = options != golf;
                control = mike.id;
                update = mike.parentId;
                oscar = oscar.HermesInternal;
                offset = oscar.concat;
                echo = ') which contains no children';
                vacuum = backup;
                source = foxtrot;
                oscar = vacuum[offset](control, source, update, echo, result);
                oscar = verify.bind(entity)(options, oscar);
                oscar = golf.filter;
                tango = function(argFoo) {
                    mike = _closure3_slot0;
                    entity = argFoo;
                    entity = entity !== mike;
                    return entity;
                };
                tango = oscar.bind(golf)(tango);
                report['children'] = tango;
                mike['parentId'] = entity;
                mike = zulu.version;
                mike = mike + 1;
                zulu['version'] = mike;
                return entity;
            }
        };
        entity['value'] = report;
        mike[14] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    oscar = 4;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guilds_bar/GuildsTree.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['GuildsNodeType'] = report;
    zulu['GuildsTree'] = tango;
    tango = function(argFoo, argBar) { // Original name: createGuildNode
        entity = {};
        mike = _closure1_slot5;
        mike = mike.GUILD;
        entity['type'] = mike;
        mike = argFoo;
        entity['id'] = mike;
        mike = argBar;
        entity['parentId'] = mike;
        mike = new Array(0);
        entity['children'] = mike;
        mike = false;
        entity['unavailable'] = mike;
        return entity;
    };
    zulu['createGuildNode'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: createFolderNode
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            tango = argFoo;
            mike = argBaz;
            entity = {};
            zulu = _closure1_slot5;
            zulu = zulu.FOLDER;
            entity['type'] = zulu;
            zulu = tango.folderId;
            entity['id'] = zulu;
            zulu = argBar;
            entity['parentId'] = zulu;
            golf = tango.folderName;
            zulu = null;
            options = zulu != golf;
            oscar = undefined;
            if(!options) { _fun00020_ip = 63; continue _fun00019 }
 60:
            oscar = golf;
 63:
            entity['name'] = oscar;
            oscar = tango.folderColor;
            golf = zulu != oscar;
            report = undefined;
            if(!golf) { _fun00020_ip = 85; continue _fun00019 }
 82:
            report = oscar;
 85:
            entity['color'] = report;
            if(!(zulu == mike)) { _fun00020_ip = 112; continue _fun00019 }
 93:
            tango = tango.expanded;
            zulu = zulu != tango;
            if(!zulu) { _fun00020_ip = 109; continue _fun00019 }
 106:
            zulu = tango;
 109:
            mike = zulu;
 112:
            entity['expanded'] = mike;
            mike = new Array(0);
            entity['children'] = mike;
            return entity;
        }
    };
    zulu['createFolderNode'] = mike;
    return entity;
})();