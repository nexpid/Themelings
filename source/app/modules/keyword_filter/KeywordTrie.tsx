// app/modules/keyword_filter/KeywordTrie.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = function() {
        tangon = function() { // Original name: TrieNode
            zuuluu = this;
            report = _closure1_slot2;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = {};
            zuuluu['suffix'] = tangon;
            tangon = null;
            zuuluu['isWord'] = tangon;
            zuuluu['value'] = tangon;
            tangon = {};
            zuuluu['suffix'] = tangon;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 2;
            michal = report[michal];
            michal = tangon.bind(entity)(michal);
            michal = michal.MatchStrategy;
            michal = michal.ExactMatch;
            zuuluu['strategy'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        zuuluu = _closure1_slot3;
        entity = {};
        michal = '_internalAdd';
        entity['key'] = michal;
        michal = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                report = argBar;
                oscard = argBaz;
                option = this;
                michal = entity.charAt;
                offset = 0;
                zuuluu = michal.bind(entity)(offset);
                michal = option.suffix;
                tangon = michal[zuuluu];
                golfie = null;
                if(!(golfie == tangon)) { _fun00002_ip = 123; continue _fun00001 }
 41:
                michal = _closure2_slot0;
                verify = michal.prototype;
                verify = Object.create(verify, {constructor: {value: michal}});
                kiloes = verify;
                michal = new kiloes[michal](backup);
                michal = michal instanceof Object ? michal : verify;
                option = option.suffix;
                option[zuuluu] = michal;
                if(!(golfie != oscard)) { _fun00002_ip = 114; continue _fun00001 }
 82:
                verify = oscard.slice;
                yankee = oscard.length;
                option = entity.length;
                yankee = yankee - option;
                option = 1;
                option = yankee + option;
                zuuluu = verify.bind(oscard)(offset, option);
 114:
                michal['value'] = zuuluu;
                tangon = michal;
 123:
                michal = entity.length;
                option = 1;
                if(!(michal > option)) { _fun00002_ip = 154; continue _fun00001 }
 135:
                michal = entity.charAt;
                zuuluu = michal.bind(entity)(option);
                michal = '*';
                if(!(michal === zuuluu)) { _fun00002_ip = 274; continue _fun00001 }
 154:
                zuuluu = report.charAt;
                michal = report.length;
                michal = michal - option;
                zuuluu = zuuluu.bind(report)(michal);
                michal = '*';
                if(!(michal !== zuuluu)) { _fun00002_ip = 221; continue _fun00001 }
 182:
                verify = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 2;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = verify.bind(michal)(zuuluu);
                michal = michal.MatchStrategy;
                michal = michal.ExactMatch;
                _fun00002_ip = 258; continue _fun00001;
 221:
                offset = _closure1_slot0;
                verify = _closure1_slot1;
                zuuluu = 2;
                verify = verify[zuuluu];
                zuuluu = undefined;
                zuuluu = offset.bind(zuuluu)(verify);
                zuuluu = zuuluu.MatchStrategy;
                michal = zuuluu.PrefixMatch;
 258:
                tangon['strategy'] = michal;
                michal = true;
                tangon['isWord'] = michal;
                _fun00002_ip = 305; continue _fun00001;
 274:
                zuuluu = tangon._internalAdd;
                michal = entity.substring;
                michal = michal.bind(entity)(option);
                if(!(golfie != oscard)) { _fun00002_ip = 298; continue _fun00001 }
 295:
                entity = oscard;
 298:
                entity = zuuluu.bind(tangon)(michal, report, entity);
 305:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'add';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            zuuluu = argFoo;
            michal = this;
            entity = michal._internalAdd;
            entity = entity.bind(michal)(zuuluu, zuuluu);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot4 = tangon;
    michal = function() {
        report = function() { // Original name: Trie
            zuuluu = this;
            report = _closure1_slot2;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            michal = _closure1_slot4;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            option = tangon;
            michal = new option[michal](golfie);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['trie'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        entity = {};
        zuuluu = 'search';
        entity['key'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                result = argFoo;
                output = this;
                sizing = output.trie;
                entity = {};
                michal = result.length;
                kiloes = 0;
                michal = kiloes <= michal;
                backup = undefined;
                romeon = 2;
                yankee = null;
                offset = 1;
                verify = 0;
                option = undefined;
                golfie = undefined;
                oscard = undefined;
                report = undefined;
                tangon = undefined;
                zuuluu = undefined;
                if(!michal) { _fun00004_ip = 406; continue _fun00003 }
 58:
                michal = result.charAt;
                source = michal.bind(result)(verify);
                michal = sizing.suffix;
                sizing = michal[source];
                michal = verify;
                if(!(yankee == sizing)) { _fun00004_ip = 133; continue _fun00003 }
 86:
                echoed = output.trie;
                echoed = echoed.suffix;
                echoed = echoed[source];
                if(!(yankee == echoed)) { _fun00004_ip = 114; continue _fun00003 }
 106:
                echoed = output.trie;
                _fun00004_ip = 130; continue _fun00003;
 114:
                update = output.trie;
                update = update.suffix;
                echoed = update[source];
 130:
                sizing = echoed;
 133:
                update = sizing.isWord;
                echoed = zuuluu;
                if(!update) { _fun00004_ip = 388; continue _fun00003 }
 148:
                ctrled = sizing.strategy;
                source = michal + offset;
                vacuum = sizing.value;
                update = yankee == vacuum;
                sequen = undefined;
                if(update) { _fun00004_ip = 177; continue _fun00003 }
 172:
                sequen = vacuum.length;
 177:
                config = yankee != sequen;
                update = 0;
                if(!config) { _fun00004_ip = 189; continue _fun00003 }
 186:
                update = sequen;
 189:
                source = source - update;
                config = _closure1_slot0;
                update = _closure1_slot1;
                update = update[romeon];
                config = config.bind(backup)(update);
                update = config.isMatch;
                limora = config;
                sierra = result;
                status = source;
                target = michal;
                papara = ctrled;
                update = limora[update](sierra, status, target, papara, cntext);
                option = sequen;
                golfie = vacuum;
                oscard = ctrled;
                report = source;
                tangon = michal;
                echoed = zuuluu;
                if(!update) { _fun00004_ip = 388; continue _fun00003 }
 259:
                config = _closure1_slot0;
                update = _closure1_slot1;
                update = update[romeon];
                config = config.bind(backup)(update);
                update = config.getMatchedPositions;
                limora = config;
                sierra = result;
                status = source;
                target = michal;
                papara = ctrled;
                update = limora[update](sierra, status, target, papara, cntext);
                config = update.start;
                config = entity[config];
                config = yankee == config;
                if(config) { _fun00004_ip = 340; continue _fun00003 }
 317:
                record = update.start;
                record = entity[record];
                cntext = record.end;
                record = update.end;
                config = cntext < record;
 340:
                option = sequen;
                golfie = vacuum;
                oscard = ctrled;
                report = source;
                tangon = michal;
                echoed = update;
                if(!config) { _fun00004_ip = 388; continue _fun00003 }
 361:
                config = update.start;
                entity[config] = update;
                option = sequen;
                golfie = vacuum;
                oscard = ctrled;
                report = source;
                tangon = michal;
                echoed = update;
 388:
                verify = michal + 1;
                michal = result.length;
                zuuluu = echoed;
                if(verify <= michal) { _fun00004_ip = 58; continue _fun00003 }
 406:
                return entity;
            }
        };
        entity['value'] = zuuluu;
        zuuluu = new Array(4);
        zuuluu[0] = entity;
        entity = {};
        oscard = 'addWord';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = this;
                zuuluu = entity.trie;
                michal = null;
                if(!(michal == zuuluu)) { _fun00006_ip = 48; continue _fun00005 }
 15:
                michal = _closure1_slot4;
                zuuluu = michal.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                report = zuuluu;
                michal = new report[michal](tangon);
                michal = michal instanceof Object ? michal : zuuluu;
                entity['trie'] = michal;
 48:
                zuuluu = entity.trie;
                michal = zuuluu.add;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[1] = entity;
        entity = {};
        oscard = 'addWords';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            zuuluu = argFoo;
            michal = this;
            var _closure3_slot0 = michal;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                zuuluu = _closure3_slot0;
                michal = zuuluu.addWord;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[2] = entity;
        entity = {};
        oscard = 'clear';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = _closure1_slot4;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            zuuluu = michal;
            entity = new zuuluu[entity](michal);
            michal = entity instanceof Object ? entity : michal;
            entity = this;
            entity['trie'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[3] = entity;
        entity = {};
        oscard = 'fromSnapshot';
        entity['key'] = oscard;
        michal = function(argFoo) { // Original name: value
            entity = _closure2_slot0;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            zuuluu = michal;
            entity = new zuuluu[entity](michal);
            entity = entity instanceof Object ? entity : michal;
            michal = argFoo;
            michal = michal.trie;
            entity['trie'] = michal;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(report, zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/keyword_filter/KeywordTrie.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['Trie'] = michal;
    return entity;
})();