// app/modules/guilds_bar/GuildsTree.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    report = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = report;
    var _closure1_slot2 = option;
    entity = function() { // Original name: randomFolderId
        entity = global;
        zuuluu = entity.Math;
        michal = zuuluu.floor;
        tangon = entity.Math;
        entity = tangon.random;
        tangon = entity.bind(tangon)();
        entity = 4294967296.0;
        entity = entity * tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    report = {};
    tangon = 'root';
    report['ROOT'] = tangon;
    tangon = 'folder';
    report['FOLDER'] = tangon;
    tangon = 'guild';
    report['GUILD'] = tangon;
    var _closure1_slot5 = report;
    tangon = function() {
        tangon = _closure1_slot4;
        zuuluu = function() { // Original name: GuildsTree
            zuuluu = this;
            report = _closure1_slot3;
            michal = _closure2_slot0;
            entity = undefined;
            michal = report.bind(entity)(zuuluu, michal);
            michal = {};
            tangon = _closure1_slot5;
            tangon = tangon.ROOT;
            michal['type'] = tangon;
            tangon = new Array(0);
            michal['children'] = tangon;
            zuuluu['root'] = michal;
            michal = {};
            zuuluu['nodes'] = michal;
            michal = 0;
            zuuluu['version'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'getSnapshot';
        entity['key'] = michal;
        michal = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = this;
                michal = {};
                offset = tangon.nodes;
                oscard = undefined;
                report = 'children';
                entity = 'childrenIds';
                for(golfie in offset)
 31:
                {
 40:
                    foxtra = golfie;
                    romeon = tangon.nodes;
                    backup = romeon[foxtra];
                    romeon = {};
                    result = romeon;
                    output = backup;
                    kiloes = copyDataProperties(result, output);
                    romeon[report] = oscard;
                    sizing = backup.children;
                    kiloes = sizing.map;
                    backup = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    backup = kiloes.bind(sizing)(backup);
                    romeon[entity] = backup;
                    michal[foxtra] = romeon;
                    _fun00002_ip = 31; continue _fun00001;
                }
 101:
                entity = {};
                tangon = tangon.root;
                report = tangon.children;
                tangon = report.map;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                zuuluu = tangon.bind(report)(zuuluu);
                entity['rootChildrenIds'] = zuuluu;
                entity['nodes'] = michal;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(15);
        michal[0] = entity;
        entity = {};
        oscard = 'loadSnapshot';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                michal = this;
                var _closure3_slot0 = michal;
                zuuluu = tangon.nodes;
                michal['nodes'] = zuuluu;
                golfie = michal.nodes;
                for(zuuluu in golfie)
 38:
                {
 47:
                    offset = zuuluu;
                    verify = michal.nodes;
                    verify = verify[offset];
                    romeon = verify.childrenIds;
                    yankee = romeon.map;
                    offset = function(argFoo) {
                        entity = _closure3_slot0;
                        michal = entity.nodes;
                        entity = argFoo;
                        entity = michal[entity];
                        return entity;
                    };
                    offset = yankee.bind(romeon)(offset);
                    verify['children'] = offset;
                    verify = delete verify.childrenIds;
                    _fun00004_ip = 38; continue _fun00003;
                }
 94:
                zuuluu = michal.root;
                report = tangon.rootChildrenIds;
                tangon = report.map;
                entity = function(argFoo) {
                    entity = _closure3_slot0;
                    michal = entity.nodes;
                    entity = argFoo;
                    entity = michal[entity];
                    return entity;
                };
                entity = tangon.bind(report)(entity);
                zuuluu['children'] = entity;
                entity = michal.version;
                entity = entity + 1;
                michal['version'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'moveNextTo';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = argFoo;
                yankee = argBar;
                report = arguments[2];
                entity = this;
                offset = undefined;
                if(!(report === offset)) { _fun00006_ip = 20; continue _fun00005 }
 18:
                report = false;
 20:
                michal = entity._pluckNode;
                michal = michal.bind(entity)(zuuluu);
                tangon = yankee.parentId;
                michal = null;
                if(!(michal == tangon)) { _fun00006_ip = 51; continue _fun00005 }
 43:
                michal = entity.root;
                _fun00006_ip = 67; continue _fun00005;
 51:
                oscard = entity.nodes;
                tangon = yankee.parentId;
                michal = oscard[tangon];
 67:
                oscard = michal.children;
                tangon = oscard.indexOf;
                option = tangon.bind(oscard)(yankee);
                golfie = _closure1_slot1;
                tangon = _closure1_slot2;
                verify = 2;
                tangon = tangon[verify];
                foxtra = golfie.bind(offset)(tangon);
                golfie = zuuluu.type;
                tangon = _closure1_slot5;
                tangon = tangon.FOLDER;
                golfie = golfie === tangon;
                if(!golfie) { _fun00006_ip = 146; continue _fun00005 }
 127:
                romeon = michal.type;
                tangon = _closure1_slot5;
                tangon = tangon.FOLDER;
                golfie = romeon === tangon;
 146:
                ctrled = zuuluu.id;
                update = michal.id;
                tangon = global;
                romeon = tangon.HermesInternal;
                sizing = romeon.concat;
                vacuum = '[GUILDS TREE] Tried moving a folder (';
                source = ') inside of another folder (';
                kiloes = ')';
                echoed = kiloes;
                romeon = vacuum[sizing](ctrled, source, update, echoed, result);
                golfie = !golfie;
                golfie = foxtra.bind(offset)(golfie, romeon);
                golfie = _closure1_slot1;
                oscard = _closure1_slot2;
                oscard = oscard[verify];
                verify = golfie.bind(offset)(oscard);
                golfie = 0;
                oscard = option >= golfie;
                ctrled = yankee.id;
                update = yankee.parentId;
                tangon = tangon.HermesInternal;
                romeon = tangon.concat;
                vacuum = '[GUILDS TREE] target node (';
                source = ') did not exist within its specified parent (';
                tangon = vacuum[romeon](ctrled, source, update, echoed, result);
                tangon = verify.bind(offset)(oscard, tangon);
                tangon = 0;
                if(!report) { _fun00006_ip = 276; continue _fun00005 }
 273:
                tangon = 1;
 276:
                source = michal.children;
                report = new Array(0);
                ctrled = report;
                update = 0;
                oscard = arraySpread(ctrled, source, update);
                michal['children'] = report;
                oscard = michal.children;
                report = oscard.splice;
                tangon = option + tangon;
                tangon = report.bind(oscard)(tangon, golfie, zuuluu);
                michal = michal.id;
                zuuluu['parentId'] = michal;
                michal = entity.version;
                michal = michal + 1;
                entity['version'] = michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'moveInto';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                michal = argBar;
                tangon = arguments[2];
                entity = this;
                report = undefined;
                if(!(tangon === report)) { _fun00008_ip = 20; continue _fun00007 }
 18:
                tangon = true;
 20:
                report = entity._pluckNode;
                report = report.bind(entity)(zuuluu);
                golfie = 0;
                oscard = 0;
                if(!tangon) { _fun00008_ip = 48; continue _fun00007 }
 38:
                tangon = michal.children;
                oscard = tangon.length;
 48:
                verify = michal.children;
                tangon = new Array(0);
                offset = tangon;
                option = 0;
                report = arraySpread(offset, verify, option);
                michal['children'] = tangon;
                report = michal.children;
                tangon = report.splice;
                tangon = tangon.bind(report)(oscard, golfie, zuuluu);
                michal = michal.id;
                zuuluu['parentId'] = michal;
                michal = entity.version;
                michal = michal + 1;
                entity['version'] = michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'addNode';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                tangon = arguments[1];
                zuuluu = arguments[2];
                michal = this;
                option = undefined;
                if(!(tangon === option)) { _fun00010_ip = 24; continue _fun00009 }
 18:
                tangon = michal.root;
 24:
                if(!(zuuluu === option)) { _fun00010_ip = 30; continue _fun00009 }
 28:
                zuuluu = true;
 30:
                golfie = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 2;
                offset = verify[entity];
                yankee = golfie.bind(option)(offset);
                offset = report.type;
                oscard = _closure1_slot5;
                oscard = oscard.ROOT;
                offset = offset !== oscard;
                oscard = '[GUILDS TREE] Tried adding another root node into the tree';
                oscard = yankee.bind(option)(offset, oscard);
                oscard = verify[entity];
                romeon = golfie.bind(option)(oscard);
                offset = report.id;
                oscard = null;
                yankee = oscard != offset;
                offset = '[GUILDS TREE] Tried adding a node without an id';
                offset = romeon.bind(option)(yankee, offset);
                entity = verify[entity];
                golfie = golfie.bind(option)(entity);
                verify = michal.nodes;
                entity = report.id;
                entity = verify[entity];
                oscard = oscard == entity;
                yankee = report.id;
                entity = global;
                entity = entity.HermesInternal;
                offset = entity.concat;
                verify = '[GUILDS TREE] Tried adding a node that already exists (';
                entity = ')';
                entity = offset.bind(verify)(yankee, entity);
                entity = golfie.bind(option)(oscard, entity);
                oscard = michal.nodes;
                entity = report.id;
                oscard[entity] = report;
                entity = michal.version;
                entity = entity + 1;
                michal['version'] = entity;
                entity = michal.moveInto;
                entity = entity.bind(michal)(report, tangon, zuuluu);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'removeNode';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = argFoo;
            entity = this;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 2;
            golfie = oscard[tangon];
            zuuluu = undefined;
            verify = report.bind(zuuluu)(golfie);
            golfie = entity.root;
            option = michal !== golfie;
            golfie = '[GUILDS TREE] Tried removing the root node from the tree';
            golfie = verify.bind(zuuluu)(option, golfie);
            tangon = oscard[tangon];
            oscard = report.bind(zuuluu)(tangon);
            report = michal.id;
            tangon = null;
            report = tangon != report;
            tangon = '[GUILDS TREE] Tried removing a node without an id';
            tangon = oscard.bind(zuuluu)(report, tangon);
            tangon = entity._pluckNode;
            tangon = tangon.bind(entity)(michal);
            michal['parentId'] = zuuluu;
            zuuluu = entity.nodes;
            michal = michal.id;
            michal = delete zuuluu[michal];
            michal = entity.version;
            michal = michal + 1;
            entity['version'] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'replaceNode';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = argFoo;
                tangon = argBar;
                entity = this;
                verify = _closure1_slot1;
                report = _closure1_slot2;
                option = 2;
                golfie = report[option];
                zuuluu = undefined;
                romeon = verify.bind(zuuluu)(golfie);
                offset = michal.id;
                golfie = null;
                yankee = golfie != offset;
                offset = '[GUILDS TREE] Tried replacing a node without an id';
                offset = romeon.bind(zuuluu)(yankee, offset);
                report = report[option];
                offset = verify.bind(zuuluu)(report);
                report = tangon.id;
                verify = golfie != report;
                report = '[GUILDS TREE] Tried replacing a node with one that does not have an id';
                report = offset.bind(zuuluu)(verify, report);
                report = michal.parentId;
                if(!(golfie == report)) { _fun00012_ip = 105; continue _fun00011 }
 97:
                report = entity.root;
                _fun00012_ip = 121; continue _fun00011;
 105:
                verify = entity.nodes;
                golfie = michal.parentId;
                report = verify[golfie];
 121:
                verify = report.children;
                golfie = verify.indexOf;
                verify = golfie.bind(verify)(michal);
                golfie = _closure1_slot1;
                oscard = _closure1_slot2;
                oscard = oscard[option];
                offset = golfie.bind(zuuluu)(oscard);
                option = 0;
                golfie = verify >= option;
                echoed = michal.id;
                output = michal.parentId;
                oscard = global;
                oscard = oscard.HermesInternal;
                foxtra = oscard.concat;
                update = '[GUILDS TREE] existing node (';
                result = ') did not exist within its specified parent (';
                sizing = ')';
                oscard = update[foxtra](echoed, result, output, sizing, kiloes);
                oscard = offset.bind(zuuluu)(golfie, oscard);
                result = report.children;
                oscard = new Array(0);
                echoed = oscard;
                output = 0;
                golfie = arraySpread(echoed, result, output);
                report['children'] = oscard;
                option = report.children;
                golfie = option.splice;
                oscard = 1;
                oscard = golfie.bind(option)(verify, oscard, tangon);
                report = report.id;
                tangon['parentId'] = report;
                michal['parentId'] = zuuluu;
                zuuluu = entity.nodes;
                michal = michal.id;
                michal = delete zuuluu[michal];
                zuuluu = entity.nodes;
                michal = tangon.id;
                zuuluu[michal] = tangon;
                michal = entity.version;
                michal = michal + 1;
                entity['version'] = michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'cloneNode';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.clone;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'convertToFolder';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                zuuluu = this;
                entity = _closure1_slot6;
                golfie = undefined;
                michal = entity.bind(golfie)();
                entity = zuuluu.getNode;
                entity = entity.bind(zuuluu)(michal);
                oscard = null;
                if(!(oscard != entity)) { _fun00014_ip = 62; continue _fun00013 }
 36:
                entity = _closure1_slot6;
                option = entity.bind(golfie)();
                entity = zuuluu.getNode;
                entity = entity.bind(zuuluu)(option);
                michal = option;
                if(oscard != entity) { _fun00014_ip = 36; continue _fun00013 }
 62:
                entity = {};
                tangon = _closure1_slot5;
                tangon = tangon.FOLDER;
                entity['type'] = tangon;
                entity['id'] = michal;
                tangon = false;
                entity['expanded'] = tangon;
                michal = new Array(0);
                entity['children'] = michal;
                michal = zuuluu.replaceNode;
                michal = michal.bind(zuuluu)(report, entity);
                michal = zuuluu.removeNode;
                michal = michal.bind(zuuluu)(report);
                michal = zuuluu.addNode;
                michal = michal.bind(zuuluu)(report, entity, tangon);
                michal = zuuluu.version;
                michal = michal + 1;
                zuuluu['version'] = michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'allNodes';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.values;
            entity = this;
            entity = entity.nodes;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'getNode';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            michal = entity.nodes;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'getRoots';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.root;
            entity = entity.children;
            return entity;
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'size';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            michal = this;
            entity = michal.allNodes;
            entity = entity.bind(michal)();
            entity = entity.length;
            return entity;
        };
        entity['get'] = oscard;
        michal[12] = entity;
        entity = {};
        oscard = 'sortedGuildNodes';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            zuuluu = function(argFoo) { // Original name: collectChildren
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.type;
                    entity = _closure1_slot5;
                    entity = entity.GUILD;
                    if(!(michal !== entity)) { _fun00016_ip = 76; continue _fun00015 }
 25:
                    michal = zuuluu.children;
                    entity = null;
                    if(!(entity != michal)) { _fun00016_ip = 70; continue _fun00015 }
 36:
                    tangon = zuuluu.children;
                    michal = tangon.map;
                    entity = function(argFoo) {
                        zuuluu = _closure3_slot0;
                        michal = undefined;
                        entity = argFoo;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    michal = michal.bind(tangon)(entity);
                    entity = michal.flat;
                    entity = entity.bind(michal)();
                    _fun00016_ip = 74; continue _fun00015;
 70:
                    entity = new Array(0);
 74:
                    _fun00016_ip = 87; continue _fun00015;
 76:
                    michal = new Array(1);
                    michal[0] = zuuluu;
                    entity = michal;
 87:
                    return entity;
                }
            };
            var _closure3_slot0 = zuuluu;
            entity = this;
            michal = entity.root;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity['value'] = oscard;
        michal[13] = entity;
        entity = {};
        oscard = '_pluckNode';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = argFoo;
                zuuluu = this;
                var _closure3_slot0 = michal;
                entity = michal.parentId;
                option = null;
                if(!(option == entity)) { _fun00018_ip = 32; continue _fun00017 }
 24:
                report = zuuluu.root;
                _fun00018_ip = 48; continue _fun00017;
 32:
                oscard = zuuluu.nodes;
                entity = michal.parentId;
                report = oscard[entity];
 48:
                offset = _closure1_slot1;
                yankee = _closure1_slot2;
                verify = 2;
                oscard = yankee[verify];
                entity = undefined;
                kiloes = offset.bind(entity)(oscard);
                romeon = option != report;
                ctrled = michal.id;
                update = michal.parentId;
                oscard = global;
                golfie = oscard.HermesInternal;
                sizing = golfie.concat;
                backup = '[GUILDS TREE] source node (';
                foxtra = ') had a parent id (';
                echoed = ") which doesn't exist in the tree";
                vacuum = backup;
                source = foxtra;
                golfie = vacuum[sizing](ctrled, source, update, echoed, result);
                golfie = kiloes.bind(entity)(romeon, golfie);
                golfie = report.children;
                verify = yankee[verify];
                verify = offset.bind(entity)(verify);
                option = option != golfie;
                ctrled = michal.id;
                update = michal.parentId;
                oscard = oscard.HermesInternal;
                offset = oscard.concat;
                echoed = ') which contains no children';
                vacuum = backup;
                source = foxtra;
                oscard = vacuum[offset](ctrled, source, update, echoed, result);
                oscard = verify.bind(entity)(option, oscard);
                oscard = golfie.filter;
                tangon = function(argFoo) {
                    michal = _closure3_slot0;
                    entity = argFoo;
                    entity = entity !== michal;
                    return entity;
                };
                tangon = oscard.bind(golfie)(tangon);
                report['children'] = tangon;
                michal['parentId'] = entity;
                michal = zuuluu.version;
                michal = michal + 1;
                zuuluu['version'] = michal;
                return entity;
            }
        };
        entity['value'] = report;
        michal[14] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    oscard = 4;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guilds_bar/GuildsTree.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['GuildsNodeType'] = report;
    zuuluu['GuildsTree'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: createGuildNode
        entity = {};
        michal = _closure1_slot5;
        michal = michal.GUILD;
        entity['type'] = michal;
        michal = argFoo;
        entity['id'] = michal;
        michal = argBar;
        entity['parentId'] = michal;
        michal = new Array(0);
        entity['children'] = michal;
        michal = false;
        entity['unavailable'] = michal;
        return entity;
    };
    zuuluu['createGuildNode'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: createFolderNode
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            tangon = argFoo;
            michal = argBaz;
            entity = {};
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.FOLDER;
            entity['type'] = zuuluu;
            zuuluu = tangon.folderId;
            entity['id'] = zuuluu;
            zuuluu = argBar;
            entity['parentId'] = zuuluu;
            golfie = tangon.folderName;
            zuuluu = null;
            option = zuuluu != golfie;
            oscard = undefined;
            if(!option) { _fun00020_ip = 63; continue _fun00019 }
 60:
            oscard = golfie;
 63:
            entity['name'] = oscard;
            oscard = tangon.folderColor;
            golfie = zuuluu != oscard;
            report = undefined;
            if(!golfie) { _fun00020_ip = 85; continue _fun00019 }
 82:
            report = oscard;
 85:
            entity['color'] = report;
            if(!(zuuluu == michal)) { _fun00020_ip = 112; continue _fun00019 }
 93:
            tangon = tangon.expanded;
            zuuluu = zuuluu != tangon;
            if(!zuuluu) { _fun00020_ip = 109; continue _fun00019 }
 106:
            zuuluu = tangon;
 109:
            michal = zuuluu;
 112:
            entity['expanded'] = michal;
            michal = new Array(0);
            entity['children'] = michal;
            return entity;
        }
    };
    zuuluu['createFolderNode'] = michal;
    return entity;
})();