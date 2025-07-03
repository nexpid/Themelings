// app/modules/messages/native/renderer/ChatManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = tangon;
    var _closure1_slot1 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    tangon = michal.Changeset;
    var _closure1_slot4 = tangon;
    michal = michal.RowType;
    var _closure1_slot5 = michal;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: ChatManager
            zuuluu = this;
            tangon = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = null;
            zuuluu['_messages'] = michal;
            tangon = new Array(0);
            zuuluu['_rows'] = tangon;
            zuuluu['messages'] = michal;
            michal = new Array(0);
            zuuluu['rows'] = michal;
            michal = 0;
            zuuluu['rowIndex'] = michal;
            michal = false;
            zuuluu['maybeRemove'] = michal;
            michal = {};
            zuuluu['uploadProgressIds'] = michal;
            michal = {};
            zuuluu['embeddedActivities'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'getPreviousMessages';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = this;
            entity = entity._messages;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(13);
        michal[0] = entity;
        entity = {};
        oscard = 'getPreviousRows';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity._rows;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'getBlocked';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                tangon = michal._messages;
                entity = null;
                if(!(entity != tangon)) { _fun00002_ip = 96; continue _fun00001 }
 18:
                tangon = global;
                oscard = tangon.Array;
                report = oscard.isArray;
                tangon = michal._messages;
                tangon = report.bind(oscard)(tangon);
                if(tangon) { _fun00002_ip = 96; continue _fun00001 }
 45:
                michal = michal._messages;
                tangon = michal._map;
                michal = zuuluu.id;
                michal = tangon[michal];
                entity = entity != michal;
                if(!entity) { _fun00002_ip = 94; continue _fun00001 }
 73:
                michal = michal.blocked;
                if(michal) { _fun00002_ip = 91; continue _fun00001 }
 82:
                zuuluu = zuuluu.blocked;
                michal = !zuuluu;
 91:
                entity = !michal;
 94:
                return entity;
 96:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'getIgnored';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                tangon = michal._messages;
                entity = null;
                if(!(entity != tangon)) { _fun00004_ip = 96; continue _fun00003 }
 18:
                tangon = global;
                oscard = tangon.Array;
                report = oscard.isArray;
                tangon = michal._messages;
                tangon = report.bind(oscard)(tangon);
                if(tangon) { _fun00004_ip = 96; continue _fun00003 }
 45:
                michal = michal._messages;
                tangon = michal._map;
                michal = zuuluu.id;
                michal = tangon[michal];
                entity = entity != michal;
                if(!entity) { _fun00004_ip = 94; continue _fun00003 }
 73:
                michal = michal.ignored;
                if(michal) { _fun00004_ip = 91; continue _fun00003 }
 82:
                zuuluu = zuuluu.ignored;
                michal = !zuuluu;
 91:
                entity = !michal;
 94:
                return entity;
 96:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'clear';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = null;
            michal['_messages'] = entity;
            entity = new Array(0);
            michal['_rows'] = entity;
            entity = {};
            michal['embeddedActivities'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'finishUpdate';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            michal = this;
            entity = argFoo;
            michal['_messages'] = entity;
            entity = argBar;
            michal['_rows'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'getLastRow';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = this;
                entity = michal.rows;
                tangon = null;
                zuuluu = tangon != entity;
                entity = null;
                if(!zuuluu) { _fun00006_ip = 70; continue _fun00005 }
 20:
                zuuluu = michal.rows;
                report = zuuluu.length;
                zuuluu = 0;
                zuuluu = report > zuuluu;
                entity = null;
                if(!zuuluu) { _fun00006_ip = 70; continue _fun00005 }
 42:
                zuuluu = michal.rows;
                michal = michal.rows;
                tangon = michal.length;
                michal = 1;
                michal = tangon - michal;
                entity = zuuluu[michal];
 70:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'setup';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = this;
                entity = argFoo;
                zuuluu['messages'] = entity;
                entity = new Array(0);
                zuuluu['rows'] = entity;
                entity = 0;
                zuuluu['rowIndex'] = entity;
                michal = zuuluu._messages;
                entity = null;
                report = entity == michal;
                entity = undefined;
                tangon = undefined;
                if(report) { _fun00008_ip = 54; continue _fun00007 }
 49:
                tangon = michal.length;
 54:
                michal = zuuluu.messages;
                michal = michal.length;
                michal = tangon === michal;
                zuuluu['maybeRemove'] = michal;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'determineChangeTypeForUploadProgress';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                zuuluu = this;
                michal = zuuluu.uploadProgressIds;
                entity = report.id;
                michal = michal[entity];
                option = null;
                if(!(option == michal)) { _fun00010_ip = 60; continue _fun00009 }
 27:
                tangon = zuuluu.uploadProgressIds;
                entity = report.id;
                tangon[entity] = report;
                entity = _closure1_slot4;
                entity = entity.INSERT;
                _fun00010_ip = 212; continue _fun00009;
 60:
                golfie = michal.items;
                verify = option == golfie;
                tangon = undefined;
                if(verify) { _fun00010_ip = 80; continue _fun00009 }
 75:
                tangon = golfie.length;
 80:
                golfie = report.items;
                option = option == golfie;
                oscard = undefined;
                if(option) { _fun00010_ip = 100; continue _fun00009 }
 95:
                oscard = golfie.length;
 100:
                if(!(tangon === oscard)) { _fun00010_ip = 181; continue _fun00009 }
 104:
                oscard = michal.compressionProgress;
                tangon = report.compressionProgress;
                if(!(oscard === tangon)) { _fun00010_ip = 181; continue _fun00009 }
 120:
                oscard = michal.progress;
                tangon = report.progress;
                if(!(oscard === tangon)) { _fun00010_ip = 181; continue _fun00009 }
 136:
                oscard = michal.currentSize;
                tangon = report.currentSize;
                if(!(oscard === tangon)) { _fun00010_ip = 181; continue _fun00009 }
 152:
                tangon = michal.name;
                michal = report.name;
                if(!(tangon === michal)) { _fun00010_ip = 181; continue _fun00009 }
 166:
                michal = _closure1_slot4;
                michal = michal.NOOP;
                _fun00010_ip = 209; continue _fun00009;
 181:
                tangon = zuuluu.uploadProgressIds;
                zuuluu = report.id;
                tangon[zuuluu] = report;
                zuuluu = _closure1_slot4;
                michal = zuuluu.UPDATE;
 209:
                entity = michal;
 212:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'determineChangeTypeForEmbeddedActivity';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                entity = this;
                oscard = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 3;
                zuuluu = tangon[zuuluu];
                tangon = undefined;
                zuuluu = oscard.bind(tangon)(zuuluu);
                tangon = zuuluu.bind(tangon)(report);
                zuuluu = entity.embeddedActivities;
                zuuluu = zuuluu[tangon];
                entity = entity.embeddedActivities;
                entity[tangon] = report;
                entity = null;
                if(!(entity == zuuluu)) { _fun00012_ip = 74; continue _fun00011 }
 62:
                entity = _closure1_slot4;
                entity = entity.INSERT;
                _fun00012_ip = 84; continue _fun00011;
 74:
                michal = _closure1_slot4;
                entity = michal.UPDATE;
 84:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'determineChangeType';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                golfie = arguments[1];
                option = this;
                report = entity.message;
                oscard = entity.updateMessageIds;
                michal = entity.forced;
                tangon = undefined;
                if(!(golfie === tangon)) { _fun00014_ip = 34; continue _fun00013 }
 32:
                golfie = false;
 34:
                zuuluu = option._messages;
                entity = null;
                if(!(entity != zuuluu)) { _fun00014_ip = 345; continue _fun00013 }
 49:
                zuuluu = global;
                offset = zuuluu.Array;
                verify = offset.isArray;
                zuuluu = option._messages;
                zuuluu = verify.bind(offset)(zuuluu);
                if(zuuluu) { _fun00014_ip = 330; continue _fun00013 }
 79:
                zuuluu = option._messages;
                zuuluu = zuuluu._map;
                if(!(entity != zuuluu)) { _fun00014_ip = 315; continue _fun00013 }
 98:
                zuuluu = option._messages;
                verify = zuuluu._map;
                zuuluu = report.id;
                offset = verify[zuuluu];
                zuuluu = offset;
                if(!(entity == offset)) { _fun00014_ip = 168; continue _fun00013 }
 126:
                verify = report.nonce;
                zuuluu = offset;
                if(!(entity != verify)) { _fun00014_ip = 168; continue _fun00013 }
 139:
                option = option._messages;
                verify = option._map;
                option = report.nonce;
                zuuluu = verify[option];
                if(!(entity == zuuluu)) { _fun00014_ip = 300; continue _fun00013 }
 168:
                if(!(entity != zuuluu)) { _fun00014_ip = 285; continue _fun00013 }
 172:
                if(!golfie) { _fun00014_ip = 193; continue _fun00013 }
 175:
                golfie = zuuluu.blocked;
                if(!golfie) { _fun00014_ip = 193; continue _fun00013 }
 184:
                golfie = report.blocked;
                if(!golfie) { _fun00014_ip = 285; continue _fun00013 }
 193:
                if(michal) { _fun00014_ip = 270; continue _fun00013 }
 196:
                if(!(entity != oscard)) { _fun00014_ip = 218; continue _fun00013 }
 200:
                michal = oscard.has;
                entity = report.id;
                entity = michal.bind(oscard)(entity);
                if(entity) { _fun00014_ip = 270; continue _fun00013 }
 218:
                oscard = _closure1_slot0;
                golfie = _closure1_slot1;
                entity = 4;
                entity = golfie[entity];
                entity = oscard.bind(tangon)(entity);
                entity = entity.bind(tangon)(zuuluu, report);
                michal = _closure1_slot4;
                if(entity) { _fun00014_ip = 262; continue _fun00013 }
 254:
                entity = michal.UPDATE;
                _fun00014_ip = 268; continue _fun00013;
 262:
                entity = michal.NOOP;
 268:
                _fun00014_ip = 283; continue _fun00013;
 270:
                michal = _closure1_slot4;
                entity = michal.UPDATE;
 283:
                _fun00014_ip = 298; continue _fun00013;
 285:
                michal = _closure1_slot4;
                entity = michal.INSERT;
 298:
                _fun00014_ip = 313; continue _fun00013;
 300:
                michal = _closure1_slot4;
                entity = michal.UPDATE;
 313:
                return entity;
 315:
                entity = _closure1_slot4;
                entity = entity.NOOP;
                return entity;
 330:
                entity = _closure1_slot4;
                entity = entity.NOOP;
                return entity;
 345:
                entity = _closure1_slot4;
                entity = entity.NOOP;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'createRow';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                michal = this;
                tangon = entity.type;
                zuuluu = _closure1_slot5;
                zuuluu = zuuluu.MESSAGE;
                if(!(tangon === zuuluu)) { _fun00016_ip = 43; continue _fun00015 }
 28:
                tangon = entity.message;
                zuuluu = null;
                if(!(zuuluu == tangon)) { _fun00016_ip = 43; continue _fun00015 }
 39:
                zuuluu = undefined;
                return zuuluu;
 43:
                zuuluu = michal.rowIndex;
                zuuluu = parseFloat(zuuluu);
                tangon = zuuluu + 1;
                michal['rowIndex'] = tangon;
                entity['index'] = zuuluu;
                zuuluu = michal.rows;
                michal = zuuluu.push;
                michal = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'createChangeset';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = this;
                tangon = new Array(0);
                entity = zuuluu._messages;
                backup = null;
                if(!(backup != entity)) { _fun00018_ip = 1248; continue _fun00017 }
 22:
                entity = zuuluu._rows;
                entity = entity.length;
                foxtra = 0;
                entity = foxtra < entity;
                yankee = undefined;
                offset = undefined;
                verify = 0;
                option = 0;
                golfie = 0;
                oscard = undefined;
                report = undefined;
                michal = undefined;
                if(entity) { _fun00018_ip = 95; continue _fun00017 }
 58:
                entity = zuuluu.rows;
                entity = entity.length;
                entity = foxtra < entity;
                yankee = undefined;
                offset = undefined;
                verify = 0;
                option = 0;
                golfie = 0;
                oscard = undefined;
                report = undefined;
                michal = undefined;
                if(!entity) { _fun00018_ip = 1227; continue _fun00017 }
 95:
                entity = zuuluu.rows;
                entity = entity.length;
                if(!(verify === entity)) { _fun00018_ip = 177; continue _fun00017 }
 110:
                kiloes = tangon.push;
                entity = {};
                sizing = _closure1_slot4;
                sizing = sizing.REMOVE;
                entity['changeType'] = sizing;
                sizing = verify + option;
                entity['index'] = sizing;
                entity = kiloes.bind(tangon)(entity);
                update = option + 1;
                echoed = golfie + 1;
                ctrled = yankee;
                source = offset;
                kiloes = verify;
                result = oscard;
                output = report;
                sizing = michal;
                _fun00018_ip = 1143; continue _fun00017;
 177:
                entity = zuuluu._rows;
                entity = entity.length;
                if(!(golfie === entity)) { _fun00018_ip = 270; continue _fun00017 }
 192:
                entity = zuuluu.rows;
                vacuum = entity[verify];
                entity = _closure1_slot4;
                entity = entity.INSERT;
                vacuum['changeType'] = entity;
                entity = verify + option;
                vacuum['index'] = entity;
                entity = tangon.push;
                entity = entity.bind(tangon)(vacuum);
                kiloes = verify + 1;
                ctrled = yankee;
                source = offset;
                update = option;
                echoed = golfie;
                result = oscard;
                output = report;
                sizing = michal;
                _fun00018_ip = 1143; continue _fun00017;
 270:
                entity = zuuluu._rows;
                vacuum = entity[golfie];
                entity = zuuluu.rows;
                entity = entity[verify];
                record = entity.changeType;
                sequen = _closure1_slot4;
                sequen = sequen.NOOP;
                if(!(sequen !== record)) { _fun00018_ip = 386; continue _fun00017 }
 313:
                sequen = _closure1_slot4;
                sequen = sequen.UPDATE;
                if(!(sequen !== record)) { _fun00018_ip = 386; continue _fun00017 }
 327:
                sequen = _closure1_slot4;
                sequen = sequen.INSERT;
                sequen = verify + option;
                entity['index'] = sequen;
                sequen = tangon.push;
                sequen = sequen.bind(tangon)(entity);
                kiloes = verify + 1;
                ctrled = yankee;
                source = offset;
                update = option;
                echoed = golfie;
                result = vacuum;
                output = entity;
                sizing = michal;
                _fun00018_ip = 1143; continue _fun00017;
 386:
                record = entity.type;
                sequen = vacuum.type;
                if(!(record === sequen)) { _fun00018_ip = 985; continue _fun00017 }
 403:
                record = entity.type;
                sequen = _closure1_slot5;
                sequen = sequen.SEPARATOR;
                if(!(record === sequen)) { _fun00018_ip = 439; continue _fun00017 }
 422:
                record = entity.id;
                sequen = vacuum.id;
                if(!(record === sequen)) { _fun00018_ip = 985; continue _fun00017 }
 439:
                record = entity.type;
                sequen = _closure1_slot5;
                sequen = sequen.LOADING;
                if(!(record === sequen)) { _fun00018_ip = 475; continue _fun00017 }
 458:
                record = entity.id;
                sequen = vacuum.id;
                if(!(record === sequen)) { _fun00018_ip = 985; continue _fun00017 }
 475:
                record = entity.type;
                sequen = _closure1_slot5;
                sequen = sequen.MESSAGE;
                if(!(record === sequen)) { _fun00018_ip = 564; continue _fun00017 }
 494:
                sequen = entity.message;
                if(!(backup != sequen)) { _fun00018_ip = 564; continue _fun00017 }
 503:
                sequen = vacuum.message;
                if(!(backup != sequen)) { _fun00018_ip = 564; continue _fun00017 }
 512:
                sequen = entity.message;
                record = sequen.id;
                sequen = vacuum.message;
                sequen = sequen.id;
                if(!(record !== sequen)) { _fun00018_ip = 564; continue _fun00017 }
 536:
                sequen = entity.message;
                record = sequen.nonce;
                sequen = vacuum.message;
                sequen = sequen.id;
                if(!(record === sequen)) { _fun00018_ip = 985; continue _fun00017 }
 564:
                record = entity.changeType;
                sequen = _closure1_slot4;
                sequen = sequen.NOOP;
                status = yankee;
                target = offset;
                if(!(record === sequen)) { _fun00018_ip = 871; continue _fun00017 }
 593:
                record = entity.type;
                sequen = _closure1_slot5;
                sequen = sequen.SEPARATOR;
                if(!(record === sequen)) { _fun00018_ip = 635; continue _fun00017 }
 612:
                record = entity.text;
                sequen = vacuum.text;
                papara = yankee;
                cntext = offset;
                if(!(record === sequen)) { _fun00018_ip = 920; continue _fun00017 }
 635:
                record = entity.type;
                sequen = _closure1_slot5;
                sequen = sequen.LOADING;
                if(!(record === sequen)) { _fun00018_ip = 679; continue _fun00017 }
 654:
                record = entity.isLoading;
                sequen = vacuum.isLoading;
                papara = yankee;
                cntext = offset;
                if(!(record === sequen)) { _fun00018_ip = 920; continue _fun00017 }
 679:
                record = entity.type;
                sequen = _closure1_slot5;
                sequen = sequen.BLOCKED_GROUP;
                if(!(record !== sequen)) { _fun00018_ip = 717; continue _fun00017 }
 698:
                record = entity.type;
                sequen = _closure1_slot5;
                sequen = sequen.IGNORED_GROUP;
                if(!(record === sequen)) { _fun00018_ip = 765; continue _fun00017 }
 717:
                record = entity.text;
                sequen = vacuum.text;
                papara = yankee;
                cntext = offset;
                if(!(record === sequen)) { _fun00018_ip = 920; continue _fun00017 }
 740:
                record = entity.revealed;
                sequen = vacuum.revealed;
                papara = yankee;
                cntext = offset;
                if(!(record === sequen)) { _fun00018_ip = 920; continue _fun00017 }
 765:
                record = entity.type;
                sequen = _closure1_slot5;
                sequen = sequen.MESSAGE;
                if(!(record === sequen)) { _fun00018_ip = 815; continue _fun00017 }
 784:
                record = entity.separatorBefore;
                sequen = vacuum.separatorBefore;
                if(!(record !== sequen)) { _fun00018_ip = 815; continue _fun00017 }
 800:
                sequen = zuuluu.maybeRemove;
                papara = yankee;
                cntext = offset;
                if(!sequen) { _fun00018_ip = 920; continue _fun00017 }
 815:
                limora = entity.message;
                sequen = backup == limora;
                record = undefined;
                if(sequen) { _fun00018_ip = 835; continue _fun00017 }
 829:
                record = limora.isFirst;
 835:
                sierra = vacuum.message;
                whisks = backup == sierra;
                sequen = undefined;
                if(whisks) { _fun00018_ip = 855; continue _fun00017 }
 849:
                sequen = sierra.isFirst;
 855:
                status = limora;
                target = sierra;
                papara = status;
                cntext = target;
                if(!(record === sequen)) { _fun00018_ip = 920; continue _fun00017 }
 871:
                sequen = verify + option;
                entity['index'] = sequen;
                sequen = tangon.push;
                sequen = sequen.bind(tangon)(entity);
                echoed = golfie + 1;
                kiloes = verify + 1;
                ctrled = status;
                source = target;
                update = option;
                result = vacuum;
                output = entity;
                sizing = michal;
                _fun00018_ip = 1143; continue _fun00017;
 920:
                sequen = _closure1_slot4;
                sequen = sequen.UPDATE;
                entity['changeType'] = sequen;
                sequen = verify + option;
                entity['index'] = sequen;
                sequen = tangon.push;
                sequen = sequen.bind(tangon)(entity);
                echoed = golfie + 1;
                kiloes = verify + 1;
                ctrled = papara;
                source = cntext;
                update = option;
                result = vacuum;
                output = entity;
                sizing = michal;
                _fun00018_ip = 1143; continue _fun00017;
 985:
                record = tangon.push;
                sequen = {};
                cntext = _closure1_slot4;
                cntext = cntext.REMOVE;
                sequen['changeType'] = cntext;
                cntext = verify + option;
                sequen['index'] = cntext;
                sequen = record.bind(tangon)(sequen);
                sequen = verify + option;
                if(!(sequen > foxtra)) { _fun00018_ip = 1119; continue _fun00017 }
 1028:
                record = verify + option;
                sequen = 1;
                sequen = record - sequen;
                sequen = tangon[sequen];
                cntext = sequen.changeType;
                record = _closure1_slot4;
                record = record.NOOP;
                record = cntext !== record;
                if(record) { _fun00018_ip = 1085; continue _fun00017 }
 1066:
                papara = sequen.type;
                cntext = _closure1_slot5;
                cntext = cntext.MESSAGE;
                record = papara !== cntext;
 1085:
                if(record) { _fun00018_ip = 1094; continue _fun00017 }
 1088:
                record = zuuluu.maybeRemove;
 1094:
                michal = sequen;
                if(record) { _fun00018_ip = 1119; continue _fun00017 }
 1100:
                config = _closure1_slot4;
                config = config.UPDATE;
                sequen['changeType'] = config;
                michal = sequen;
 1119:
                echoed = golfie + 1;
                update = option + 1;
                sizing = michal;
                ctrled = yankee;
                source = offset;
                kiloes = verify;
                result = vacuum;
                output = entity;
 1143:
                entity = zuuluu._rows;
                entity = entity.length;
                yankee = ctrled;
                offset = source;
                verify = kiloes;
                option = update;
                golfie = echoed;
                oscard = result;
                report = output;
                michal = sizing;
                if(echoed < entity) { _fun00018_ip = 95; continue _fun00017 }
 1185:
                entity = zuuluu.rows;
                entity = entity.length;
                yankee = ctrled;
                offset = source;
                option = update;
                golfie = echoed;
                oscard = result;
                report = output;
                michal = sizing;
                verify = kiloes;
                if(verify < entity) { _fun00018_ip = 95; continue _fun00017 }
 1227:
                michal = tangon.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.changeType;
                    entity = _closure1_slot4;
                    entity = entity.NOOP;
                    entity = michal !== entity;
                    return entity;
                };
                entity = michal.bind(tangon)(entity);
                _fun00018_ip = 1254; continue _fun00017;
 1248:
                entity = zuuluu.rows;
 1254:
                michal = zuuluu.messages;
                zuuluu['_messages'] = michal;
                michal = zuuluu.rows;
                zuuluu['_rows'] = michal;
                return entity;
            }
        };
        entity['value'] = report;
        michal[12] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = michal.bind(entity)();
    michal = {};
    option = function() { // Original name: determineChangeType
        entity = _closure1_slot4;
        entity = entity.NOOP;
        return entity;
    };
    michal['determineChangeType'] = option;
    option = function() { // Original name: determineChangeTypeForUploadProgress
        entity = _closure1_slot4;
        entity = entity.NOOP;
        return entity;
    };
    michal['determineChangeTypeForUploadProgress'] = option;
    option = function() { // Original name: determineChangeTypeForEmbeddedActivity
        entity = _closure1_slot4;
        entity = entity.NOOP;
        return entity;
    };
    michal['determineChangeTypeForEmbeddedActivity'] = option;
    option = function() { // Original name: getBlocked
        entity = false;
        return entity;
    };
    michal['getBlocked'] = option;
    report = function() { // Original name: getIgnored
        entity = false;
        return entity;
    };
    michal['getIgnored'] = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/native/renderer/ChatManager.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['MockChatManager'] = michal;
    return entity;
})();