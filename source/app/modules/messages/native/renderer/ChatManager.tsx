// app/modules/messages/native/renderer/ChatManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    tango = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = tango;
    var _closure1_slot1 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = golf[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 2;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    tango = mike.Changeset;
    var _closure1_slot4 = tango;
    mike = mike.RowType;
    var _closure1_slot5 = mike;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: ChatManager
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = null;
            zulu['_messages'] = mike;
            tango = new Array(0);
            zulu['_rows'] = tango;
            zulu['messages'] = mike;
            mike = new Array(0);
            zulu['rows'] = mike;
            mike = 0;
            zulu['rowIndex'] = mike;
            mike = false;
            zulu['maybeRemove'] = mike;
            mike = {};
            zulu['uploadProgressIds'] = mike;
            mike = {};
            zulu['embeddedActivities'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'getPreviousMessages';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = this;
            entity = entity._messages;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(14);
        mike[0] = entity;
        entity = {};
        oscar = 'getPreviousRows';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity._rows;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'getBlocked';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = argFoo;
                mike = this;
                tango = mike._messages;
                entity = null;
                if(!(entity != tango)) { _fun00002_ip = 96; continue _fun00001 }
 18:
                tango = global;
                oscar = tango.Array;
                report = oscar.isArray;
                tango = mike._messages;
                tango = report.bind(oscar)(tango);
                if(tango) { _fun00002_ip = 96; continue _fun00001 }
 45:
                mike = mike._messages;
                tango = mike._map;
                mike = zulu.id;
                mike = tango[mike];
                entity = entity != mike;
                if(!entity) { _fun00002_ip = 94; continue _fun00001 }
 73:
                mike = mike.blocked;
                if(mike) { _fun00002_ip = 91; continue _fun00001 }
 82:
                zulu = zulu.blocked;
                mike = !zulu;
 91:
                entity = !mike;
 94:
                return entity;
 96:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'getIgnored';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = argFoo;
                mike = this;
                tango = mike._messages;
                entity = null;
                if(!(entity != tango)) { _fun00004_ip = 96; continue _fun00003 }
 18:
                tango = global;
                oscar = tango.Array;
                report = oscar.isArray;
                tango = mike._messages;
                tango = report.bind(oscar)(tango);
                if(tango) { _fun00004_ip = 96; continue _fun00003 }
 45:
                mike = mike._messages;
                tango = mike._map;
                mike = zulu.id;
                mike = tango[mike];
                entity = entity != mike;
                if(!entity) { _fun00004_ip = 94; continue _fun00003 }
 73:
                mike = mike.ignored;
                if(mike) { _fun00004_ip = 91; continue _fun00003 }
 82:
                zulu = zulu.ignored;
                mike = !zulu;
 91:
                entity = !mike;
 94:
                return entity;
 96:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'clear';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = null;
            mike['_messages'] = entity;
            entity = new Array(0);
            mike['_rows'] = entity;
            entity = {};
            mike['embeddedActivities'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'finishUpdate';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            mike = this;
            entity = argFoo;
            mike['_messages'] = entity;
            entity = argBar;
            mike['_rows'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'getLastRow';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = this;
                entity = mike.rows;
                tango = null;
                zulu = tango != entity;
                entity = null;
                if(!zulu) { _fun00006_ip = 70; continue _fun00005 }
 20:
                zulu = mike.rows;
                report = zulu.length;
                zulu = 0;
                zulu = report > zulu;
                entity = null;
                if(!zulu) { _fun00006_ip = 70; continue _fun00005 }
 42:
                zulu = mike.rows;
                mike = mike.rows;
                tango = mike.length;
                mike = 1;
                mike = tango - mike;
                entity = zulu[mike];
 70:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'setup';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = this;
                entity = argFoo;
                zulu['messages'] = entity;
                entity = new Array(0);
                zulu['rows'] = entity;
                entity = 0;
                zulu['rowIndex'] = entity;
                mike = zulu._messages;
                entity = null;
                report = entity == mike;
                entity = undefined;
                tango = undefined;
                if(report) { _fun00008_ip = 54; continue _fun00007 }
 49:
                tango = mike.length;
 54:
                mike = zulu.messages;
                mike = mike.length;
                mike = tango === mike;
                zulu['maybeRemove'] = mike;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'determineChangeTypeForUploadProgress';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                zulu = this;
                mike = zulu.uploadProgressIds;
                entity = report.id;
                mike = mike[entity];
                options = null;
                if(!(options == mike)) { _fun00010_ip = 60; continue _fun00009 }
 27:
                tango = zulu.uploadProgressIds;
                entity = report.id;
                tango[entity] = report;
                entity = _closure1_slot4;
                entity = entity.INSERT;
                _fun00010_ip = 212; continue _fun00009;
 60:
                golf = mike.items;
                verify = options == golf;
                tango = undefined;
                if(verify) { _fun00010_ip = 80; continue _fun00009 }
 75:
                tango = golf.length;
 80:
                golf = report.items;
                options = options == golf;
                oscar = undefined;
                if(options) { _fun00010_ip = 100; continue _fun00009 }
 95:
                oscar = golf.length;
 100:
                if(!(tango === oscar)) { _fun00010_ip = 181; continue _fun00009 }
 104:
                oscar = mike.compressionProgress;
                tango = report.compressionProgress;
                if(!(oscar === tango)) { _fun00010_ip = 181; continue _fun00009 }
 120:
                oscar = mike.progress;
                tango = report.progress;
                if(!(oscar === tango)) { _fun00010_ip = 181; continue _fun00009 }
 136:
                oscar = mike.currentSize;
                tango = report.currentSize;
                if(!(oscar === tango)) { _fun00010_ip = 181; continue _fun00009 }
 152:
                tango = mike.name;
                mike = report.name;
                if(!(tango === mike)) { _fun00010_ip = 181; continue _fun00009 }
 166:
                mike = _closure1_slot4;
                mike = mike.NOOP;
                _fun00010_ip = 209; continue _fun00009;
 181:
                tango = zulu.uploadProgressIds;
                zulu = report.id;
                tango[zulu] = report;
                zulu = _closure1_slot4;
                mike = zulu.UPDATE;
 209:
                entity = mike;
 212:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'determineChangeTypeForEmbeddedActivity';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                entity = this;
                oscar = _closure1_slot0;
                tango = _closure1_slot1;
                zulu = 3;
                zulu = tango[zulu];
                tango = undefined;
                zulu = oscar.bind(tango)(zulu);
                tango = zulu.bind(tango)(report);
                zulu = entity.embeddedActivities;
                zulu = zulu[tango];
                entity = entity.embeddedActivities;
                entity[tango] = report;
                entity = null;
                if(!(entity == zulu)) { _fun00012_ip = 74; continue _fun00011 }
 62:
                entity = _closure1_slot4;
                entity = entity.INSERT;
                _fun00012_ip = 84; continue _fun00011;
 74:
                mike = _closure1_slot4;
                entity = mike.UPDATE;
 84:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'hasFileInCurrentRows';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = this;
            zulu = mike.rows;
            mike = zulu.some;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.type;
                    entity = _closure1_slot5;
                    entity = entity.UPLOAD_PROGRESS;
                    entity = zulu === entity;
                    if(!entity) { _fun00014_ip = 45; continue _fun00013 }
 28:
                    zulu = mike.fileId;
                    mike = _closure3_slot0;
                    entity = zulu === mike;
 45:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'determineChangeType';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                oscar = arguments[1];
                golf = this;
                report = entity.message;
                options = entity.updateMessageIds;
                mike = entity.forced;
                tango = undefined;
                if(!(oscar === tango)) { _fun00016_ip = 34; continue _fun00015 }
 32:
                oscar = false;
 34:
                zulu = golf._messages;
                entity = null;
                if(!(entity != zulu)) { _fun00016_ip = 325; continue _fun00015 }
 49:
                zulu = global;
                offset = zulu.Array;
                verify = offset.isArray;
                zulu = golf._messages;
                zulu = verify.bind(offset)(zulu);
                if(zulu) { _fun00016_ip = 325; continue _fun00015 }
 79:
                zulu = golf._messages;
                zulu = zulu._map;
                if(!(entity != zulu)) { _fun00016_ip = 325; continue _fun00015 }
 98:
                zulu = golf._messages;
                verify = zulu._map;
                zulu = report.id;
                offset = verify[zulu];
                zulu = offset;
                if(!(entity == zulu)) { _fun00016_ip = 168; continue _fun00015 }
 126:
                verify = report.nonce;
                zulu = offset;
                if(!(entity != verify)) { _fun00016_ip = 168; continue _fun00015 }
 139:
                golf = golf._messages;
                verify = golf._map;
                golf = report.nonce;
                zulu = verify[golf];
                if(!(entity == zulu)) { _fun00016_ip = 310; continue _fun00015 }
 168:
                if(!(entity == zulu)) { _fun00016_ip = 187; continue _fun00015 }
 172:
                golf = _closure1_slot4;
                golf = golf.INSERT;
                return golf;
 187:
                if(!oscar) { _fun00016_ip = 223; continue _fun00015 }
 190:
                oscar = zulu.blocked;
                if(!oscar) { _fun00016_ip = 223; continue _fun00015 }
 199:
                oscar = report.blocked;
                if(oscar) { _fun00016_ip = 223; continue _fun00015 }
 208:
                oscar = _closure1_slot4;
                oscar = oscar.INSERT;
                return oscar;
 223:
                entity = entity != options;
                if(!entity) { _fun00016_ip = 245; continue _fun00015 }
 230:
                golf = options.has;
                oscar = report.id;
                entity = golf.bind(options)(oscar);
 245:
                if(mike) { _fun00016_ip = 295; continue _fun00015 }
 248:
                if(entity) { _fun00016_ip = 295; continue _fun00015 }
 251:
                oscar = _closure1_slot0;
                golf = _closure1_slot1;
                mike = 4;
                mike = golf[mike];
                mike = oscar.bind(tango)(mike);
                mike = mike.bind(tango)(zulu, report);
                if(!mike) { _fun00016_ip = 295; continue _fun00015 }
 283:
                entity = _closure1_slot4;
                entity = entity.NOOP;
                _fun00016_ip = 308; continue _fun00015;
 295:
                mike = _closure1_slot4;
                entity = mike.UPDATE;
 308:
                return entity;
 310:
                entity = _closure1_slot4;
                entity = entity.UPDATE;
                return entity;
 325:
                entity = _closure1_slot4;
                entity = entity.NOOP;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'createRow';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                mike = this;
                tango = entity.type;
                zulu = _closure1_slot5;
                zulu = zulu.MESSAGE;
                if(!(tango === zulu)) { _fun00018_ip = 43; continue _fun00017 }
 28:
                tango = entity.message;
                zulu = null;
                if(!(zulu == tango)) { _fun00018_ip = 43; continue _fun00017 }
 39:
                zulu = undefined;
                return zulu;
 43:
                zulu = mike.rowIndex;
                zulu = parseFloat(zulu);
                tango = zulu + 1;
                mike['rowIndex'] = tango;
                entity['index'] = zulu;
                zulu = mike.rows;
                mike = zulu.push;
                mike = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'createChangeset';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zulu = this;
                tango = new Array(0);
                entity = zulu._messages;
                backup = null;
                if(!(backup != entity)) { _fun00020_ip = 1424; continue _fun00019 }
 22:
                entity = zulu._rows;
                entity = entity.length;
                foxtrot = 0;
                entity = foxtrot < entity;
                yankee = undefined;
                offset = undefined;
                verify = 0;
                options = 0;
                golf = 0;
                oscar = undefined;
                report = undefined;
                mike = undefined;
                if(entity) { _fun00020_ip = 95; continue _fun00019 }
 58:
                entity = zulu.rows;
                entity = entity.length;
                entity = foxtrot < entity;
                yankee = undefined;
                offset = undefined;
                verify = 0;
                options = 0;
                golf = 0;
                oscar = undefined;
                report = undefined;
                mike = undefined;
                if(!entity) { _fun00020_ip = 1403; continue _fun00019 }
 95:
                entity = zulu.rows;
                entity = entity.length;
                if(!(verify === entity)) { _fun00020_ip = 177; continue _fun00019 }
 110:
                kilo = tango.push;
                entity = {};
                sizing = _closure1_slot4;
                sizing = sizing.REMOVE;
                entity['changeType'] = sizing;
                sizing = verify + options;
                entity['index'] = sizing;
                entity = kilo.bind(tango)(entity);
                update = options + 1;
                echo = golf + 1;
                control = yankee;
                source = offset;
                kilo = verify;
                result = oscar;
                output = report;
                sizing = mike;
                _fun00020_ip = 1319; continue _fun00019;
 177:
                entity = zulu._rows;
                entity = entity.length;
                if(!(golf === entity)) { _fun00020_ip = 270; continue _fun00019 }
 192:
                entity = zulu.rows;
                vacuum = entity[verify];
                entity = _closure1_slot4;
                entity = entity.INSERT;
                vacuum['changeType'] = entity;
                entity = verify + options;
                vacuum['index'] = entity;
                entity = tango.push;
                entity = entity.bind(tango)(vacuum);
                kilo = verify + 1;
                control = yankee;
                source = offset;
                update = options;
                echo = golf;
                result = oscar;
                output = report;
                sizing = mike;
                _fun00020_ip = 1319; continue _fun00019;
 270:
                entity = zulu._rows;
                vacuum = entity[golf];
                entity = zulu.rows;
                entity = entity[verify];
                record = entity.changeType;
                sequence = _closure1_slot4;
                sequence = sequence.NOOP;
                if(!(sequence !== record)) { _fun00020_ip = 386; continue _fun00019 }
 313:
                sequence = _closure1_slot4;
                sequence = sequence.UPDATE;
                if(!(sequence !== record)) { _fun00020_ip = 386; continue _fun00019 }
 327:
                sequence = _closure1_slot4;
                sequence = sequence.INSERT;
                sequence = verify + options;
                entity['index'] = sequence;
                sequence = tango.push;
                sequence = sequence.bind(tango)(entity);
                kilo = verify + 1;
                control = yankee;
                source = offset;
                update = options;
                echo = golf;
                result = vacuum;
                output = entity;
                sizing = mike;
                _fun00020_ip = 1319; continue _fun00019;
 386:
                record = vacuum.type;
                sequence = _closure1_slot5;
                sequence = sequence.UPLOAD_PROGRESS;
                if(!(record === sequence)) { _fun00020_ip = 522; continue _fun00019 }
 405:
                record = vacuum.type;
                sequence = entity.type;
                if(!(record === sequence)) { _fun00020_ip = 522; continue _fun00019 }
 419:
                record = vacuum.fileId;
                sequence = entity.fileId;
                if(!(record !== sequence)) { _fun00020_ip = 522; continue _fun00019 }
 435:
                record = zulu.hasFileInCurrentRows;
                sequence = vacuum.fileId;
                sequence = record.bind(zulu)(sequence);
                if(sequence) { _fun00020_ip = 522; continue _fun00019 }
 457:
                record = tango.push;
                sequence = {};
                context = _closure1_slot4;
                context = context.REMOVE;
                sequence['changeType'] = context;
                context = vacuum.index;
                sequence['index'] = context;
                sequence = record.bind(tango)(sequence);
                echo = golf + 1;
                update = options + 1;
                control = yankee;
                source = offset;
                kilo = verify;
                result = vacuum;
                output = entity;
                sizing = mike;
                _fun00020_ip = 1319; continue _fun00019;
 522:
                record = entity.type;
                sequence = vacuum.type;
                if(!(record === sequence)) { _fun00020_ip = 1161; continue _fun00019 }
 539:
                record = entity.type;
                sequence = _closure1_slot5;
                sequence = sequence.SEPARATOR;
                if(!(record === sequence)) { _fun00020_ip = 575; continue _fun00019 }
 558:
                record = entity.id;
                sequence = vacuum.id;
                if(!(record === sequence)) { _fun00020_ip = 1161; continue _fun00019 }
 575:
                record = entity.type;
                sequence = _closure1_slot5;
                sequence = sequence.LOADING;
                if(!(record === sequence)) { _fun00020_ip = 611; continue _fun00019 }
 594:
                record = entity.id;
                sequence = vacuum.id;
                if(!(record === sequence)) { _fun00020_ip = 1161; continue _fun00019 }
 611:
                record = entity.type;
                sequence = _closure1_slot5;
                sequence = sequence.MESSAGE;
                if(!(record === sequence)) { _fun00020_ip = 700; continue _fun00019 }
 630:
                sequence = entity.message;
                if(!(backup != sequence)) { _fun00020_ip = 700; continue _fun00019 }
 639:
                sequence = vacuum.message;
                if(!(backup != sequence)) { _fun00020_ip = 700; continue _fun00019 }
 648:
                sequence = entity.message;
                record = sequence.id;
                sequence = vacuum.message;
                sequence = sequence.id;
                if(!(record !== sequence)) { _fun00020_ip = 700; continue _fun00019 }
 672:
                sequence = entity.message;
                record = sequence.nonce;
                sequence = vacuum.message;
                sequence = sequence.id;
                if(!(record === sequence)) { _fun00020_ip = 1161; continue _fun00019 }
 700:
                record = entity.changeType;
                sequence = _closure1_slot4;
                sequence = sequence.NOOP;
                status = yankee;
                target = offset;
                if(!(record === sequence)) { _fun00020_ip = 1047; continue _fun00019 }
 729:
                record = entity.type;
                sequence = _closure1_slot5;
                sequence = sequence.SEPARATOR;
                if(!(record === sequence)) { _fun00020_ip = 796; continue _fun00019 }
 748:
                record = entity.text;
                sequence = vacuum.text;
                papa = yankee;
                context = offset;
                if(!(record === sequence)) { _fun00020_ip = 1096; continue _fun00019 }
 771:
                record = entity.scrollTo;
                sequence = vacuum.scrollTo;
                papa = yankee;
                context = offset;
                if(!(record === sequence)) { _fun00020_ip = 1096; continue _fun00019 }
 796:
                record = entity.type;
                sequence = _closure1_slot5;
                sequence = sequence.LOADING;
                if(!(record === sequence)) { _fun00020_ip = 840; continue _fun00019 }
 815:
                record = entity.isLoading;
                sequence = vacuum.isLoading;
                papa = yankee;
                context = offset;
                if(!(record === sequence)) { _fun00020_ip = 1096; continue _fun00019 }
 840:
                record = entity.type;
                sequence = _closure1_slot5;
                sequence = sequence.BLOCKED_GROUP;
                if(!(record !== sequence)) { _fun00020_ip = 878; continue _fun00019 }
 859:
                record = entity.type;
                sequence = _closure1_slot5;
                sequence = sequence.IGNORED_GROUP;
                if(!(record === sequence)) { _fun00020_ip = 926; continue _fun00019 }
 878:
                record = entity.text;
                sequence = vacuum.text;
                papa = yankee;
                context = offset;
                if(!(record === sequence)) { _fun00020_ip = 1096; continue _fun00019 }
 901:
                record = entity.revealed;
                sequence = vacuum.revealed;
                papa = yankee;
                context = offset;
                if(!(record === sequence)) { _fun00020_ip = 1096; continue _fun00019 }
 926:
                record = entity.type;
                sequence = _closure1_slot5;
                sequence = sequence.MESSAGE;
                if(!(record === sequence)) { _fun00020_ip = 991; continue _fun00019 }
 945:
                record = entity.separatorBefore;
                sequence = vacuum.separatorBefore;
                if(!(record !== sequence)) { _fun00020_ip = 976; continue _fun00019 }
 961:
                sequence = zulu.maybeRemove;
                papa = yankee;
                context = offset;
                if(!sequence) { _fun00020_ip = 1096; continue _fun00019 }
 976:
                sequence = entity.jumped;
                papa = yankee;
                context = offset;
                if(sequence) { _fun00020_ip = 1096; continue _fun00019 }
 991:
                lima = entity.message;
                sequence = backup == lima;
                record = undefined;
                if(sequence) { _fun00020_ip = 1011; continue _fun00019 }
 1005:
                record = lima.isFirst;
 1011:
                sierra = vacuum.message;
                whiskey = backup == sierra;
                sequence = undefined;
                if(whiskey) { _fun00020_ip = 1031; continue _fun00019 }
 1025:
                sequence = sierra.isFirst;
 1031:
                status = lima;
                target = sierra;
                papa = status;
                context = target;
                if(!(record === sequence)) { _fun00020_ip = 1096; continue _fun00019 }
 1047:
                sequence = verify + options;
                entity['index'] = sequence;
                sequence = tango.push;
                sequence = sequence.bind(tango)(entity);
                echo = golf + 1;
                kilo = verify + 1;
                control = status;
                source = target;
                update = options;
                result = vacuum;
                output = entity;
                sizing = mike;
                _fun00020_ip = 1319; continue _fun00019;
 1096:
                sequence = _closure1_slot4;
                sequence = sequence.UPDATE;
                entity['changeType'] = sequence;
                sequence = verify + options;
                entity['index'] = sequence;
                sequence = tango.push;
                sequence = sequence.bind(tango)(entity);
                echo = golf + 1;
                kilo = verify + 1;
                control = papa;
                source = context;
                update = options;
                result = vacuum;
                output = entity;
                sizing = mike;
                _fun00020_ip = 1319; continue _fun00019;
 1161:
                record = tango.push;
                sequence = {};
                context = _closure1_slot4;
                context = context.REMOVE;
                sequence['changeType'] = context;
                context = verify + options;
                sequence['index'] = context;
                sequence = record.bind(tango)(sequence);
                sequence = verify + options;
                if(!(sequence > foxtrot)) { _fun00020_ip = 1295; continue _fun00019 }
 1204:
                record = verify + options;
                sequence = 1;
                sequence = record - sequence;
                sequence = tango[sequence];
                context = sequence.changeType;
                record = _closure1_slot4;
                record = record.NOOP;
                record = context !== record;
                if(record) { _fun00020_ip = 1261; continue _fun00019 }
 1242:
                papa = sequence.type;
                context = _closure1_slot5;
                context = context.MESSAGE;
                record = papa !== context;
 1261:
                if(record) { _fun00020_ip = 1270; continue _fun00019 }
 1264:
                record = zulu.maybeRemove;
 1270:
                mike = sequence;
                if(record) { _fun00020_ip = 1295; continue _fun00019 }
 1276:
                config = _closure1_slot4;
                config = config.UPDATE;
                sequence['changeType'] = config;
                mike = sequence;
 1295:
                echo = golf + 1;
                update = options + 1;
                sizing = mike;
                control = yankee;
                source = offset;
                kilo = verify;
                result = vacuum;
                output = entity;
 1319:
                entity = zulu._rows;
                entity = entity.length;
                yankee = control;
                offset = source;
                verify = kilo;
                options = update;
                golf = echo;
                oscar = result;
                report = output;
                mike = sizing;
                if(echo < entity) { _fun00020_ip = 95; continue _fun00019 }
 1361:
                entity = zulu.rows;
                entity = entity.length;
                yankee = control;
                offset = source;
                options = update;
                golf = echo;
                oscar = result;
                report = output;
                mike = sizing;
                verify = kilo;
                if(verify < entity) { _fun00020_ip = 95; continue _fun00019 }
 1403:
                mike = tango.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    mike = entity.changeType;
                    entity = _closure1_slot4;
                    entity = entity.NOOP;
                    entity = mike !== entity;
                    return entity;
                };
                entity = mike.bind(tango)(entity);
                _fun00020_ip = 1430; continue _fun00019;
 1424:
                entity = zulu.rows;
 1430:
                mike = zulu.messages;
                zulu['_messages'] = mike;
                mike = zulu.rows;
                zulu['_rows'] = mike;
                return entity;
            }
        };
        entity['value'] = report;
        mike[13] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = mike.bind(entity)();
    mike = {};
    options = function() { // Original name: determineChangeType
        entity = _closure1_slot4;
        entity = entity.NOOP;
        return entity;
    };
    mike['determineChangeType'] = options;
    options = function() { // Original name: determineChangeTypeForUploadProgress
        entity = _closure1_slot4;
        entity = entity.NOOP;
        return entity;
    };
    mike['determineChangeTypeForUploadProgress'] = options;
    options = function() { // Original name: determineChangeTypeForEmbeddedActivity
        entity = _closure1_slot4;
        entity = entity.NOOP;
        return entity;
    };
    mike['determineChangeTypeForEmbeddedActivity'] = options;
    options = function() { // Original name: getBlocked
        entity = false;
        return entity;
    };
    mike['getBlocked'] = options;
    report = function() { // Original name: getIgnored
        entity = false;
        return entity;
    };
    mike['getIgnored'] = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/messages/native/renderer/ChatManager.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['MockChatManager'] = mike;
    return entity;
})();