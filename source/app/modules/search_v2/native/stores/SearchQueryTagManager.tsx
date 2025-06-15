// app/modules/search_v2/native/stores/SearchQueryTagManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: isPrefix
        entity = argFoo;
        michal = entity.type;
        entity = _closure1_slot5;
        entity = entity.PREFIX;
        entity = michal === entity;
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: isComplete
        entity = argFoo;
        michal = entity.type;
        entity = _closure1_slot5;
        entity = entity.COMPLETE;
        entity = michal === entity;
        return entity;
    };
    var _closure1_slot10 = entity;
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
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchQueryTagTypes;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchFilterAddLocations;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.SearchTokenTypes;
    var _closure1_slot7 = golfie;
    tangon = tangon.SearchTypes;
    var _closure1_slot8 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function(argFoo) { // Original name: SearchQueryTagManager
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                oscard = argFoo;
                zuuluu = this;
                report = _closure1_slot2;
                michal = _closure2_slot0;
                entity = undefined;
                michal = report.bind(entity)(zuuluu, michal);
                golfie = global;
                michal = golfie.Set;
                report = michal.prototype;
                report = Object.create(report, {constructor: {value: michal}});
                output = report;
                michal = new output[michal](sizing);
                michal = michal instanceof Object ? michal : report;
                zuuluu['ids'] = michal;
                michal = golfie.Set;
                report = michal.prototype;
                report = Object.create(report, {constructor: {value: michal}});
                output = report;
                michal = new output[michal](sizing);
                michal = michal instanceof Object ? michal : report;
                zuuluu['channelIds'] = michal;
                michal = 0;
                zuuluu['version'] = michal;
                report = oscard.type;
                michal = _closure1_slot8;
                michal = michal.GUILD_CHANNEL;
                if(!(report !== michal)) { _fun00002_ip = 130; continue _fun00001 }
 121:
                michal = new Array(0);
                _fun00002_ip = 317; continue _fun00001;
 130:
                verify = _closure1_slot4;
                option = verify.getChannel;
                report = oscard.channelId;
                report = option.bind(verify)(report);
                option = null;
                option = option == report;
                yankee = undefined;
                if(option) { _fun00002_ip = 165; continue _fun00001 }
 160:
                yankee = report.name;
 165:
                report = {};
                option = _closure1_slot5;
                option = option.COMPLETE;
                report['type'] = option;
                option = _closure1_slot7;
                option = option.FILTER_IN;
                report['searchTokenType'] = option;
                romeon = _closure1_slot0;
                foxtra = _closure1_slot1;
                option = 6;
                verify = foxtra[option];
                verify = romeon.bind(entity)(verify);
                offset = verify.intl;
                verify = offset.string;
                option = foxtra[option];
                option = romeon.bind(entity)(option);
                option = option.t;
                option = option.WNpFHR;
                offset = verify.bind(offset)(option);
                golfie = golfie.HermesInternal;
                verify = golfie.concat;
                option = '';
                golfie = ': ';
                golfie = verify.bind(option)(offset, golfie, yankee);
                report['text'] = golfie;
                oscard = oscard.channelId;
                report['channelId'] = oscard;
                tangon = _closure1_slot6;
                tangon = tangon.CLIENT_AUTO_ADD;
                report['location'] = tangon;
                tangon = new Array(1);
                tangon[0] = report;
                michal = tangon;
 317:
                zuuluu['defaultTags'] = michal;
                michal = zuuluu.defaultTags;
                zuuluu['tags'] = michal;
                michal = zuuluu.markChanged;
                michal = michal.bind(zuuluu)();
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'markChanged';
        entity['key'] = michal;
        michal = function() { // Original name: value
            michal = this;
            entity = global;
            zuuluu = entity.Set;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            option = report;
            zuuluu = new option[zuuluu](golfie);
            zuuluu = zuuluu instanceof Object ? zuuluu : report;
            var _closure3_slot0 = zuuluu;
            entity = entity.Set;
            report = entity.prototype;
            report = Object.create(report, {constructor: {value: entity}});
            option = report;
            entity = new option[entity](golfie);
            entity = entity instanceof Object ? entity : report;
            var _closure3_slot1 = entity;
            oscard = michal.tags;
            report = oscard.forEach;
            tangon = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    report = _closure3_slot0;
                    tangon = report.add;
                    entity = michal.text;
                    entity = tangon.bind(report)(entity);
                    tangon = _closure1_slot10;
                    entity = undefined;
                    tangon = tangon.bind(entity)(michal);
                    if(!tangon) { _fun00004_ip = 53; continue _fun00003 }
 42:
                    oscard = michal.channelId;
                    report = null;
                    tangon = report != oscard;
 53:
                    if(!tangon) { _fun00004_ip = 75; continue _fun00003 }
 56:
                    tangon = _closure3_slot1;
                    zuuluu = tangon.add;
                    michal = michal.channelId;
                    michal = zuuluu.bind(tangon)(michal);
 75:
                    return entity;
                }
            };
            tangon = report.bind(oscard)(tangon);
            michal['ids'] = zuuluu;
            michal['channelIds'] = entity;
            entity = michal.version;
            entity = entity + 1;
            michal['version'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(17);
        michal[0] = entity;
        entity = {};
        oscard = 'mergeTag';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            report = argFoo;
            tangon = argBar;
            michal = this;
            var _closure3_slot0 = report;
            var _closure3_slot1 = tangon;
            zuuluu = {};
            oscard = _closure1_slot5;
            oscard = oscard.COMPLETE;
            zuuluu['type'] = oscard;
            offset = report.text;
            verify = tangon.text;
            oscard = global;
            oscard = oscard.HermesInternal;
            option = oscard.concat;
            golfie = '';
            oscard = ' ';
            oscard = option.bind(golfie)(offset, oscard, verify);
            zuuluu['text'] = oscard;
            oscard = report.location;
            zuuluu['location'] = oscard;
            report = report.searchTokenType;
            zuuluu['searchTokenType'] = report;
            report = tangon.channelId;
            zuuluu['channelId'] = report;
            tangon = tangon.userId;
            zuuluu['userId'] = tangon;
            report = michal.tags;
            tangon = report.filter;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure3_slot0;
                    entity = zuuluu !== entity;
                    if(!entity) { _fun00006_ip = 25; continue _fun00005 }
 17:
                    michal = _closure3_slot1;
                    entity = zuuluu !== michal;
 25:
                    return entity;
                }
            };
            romeon = tangon.bind(report)(entity);
            entity = new Array(1);
            yankee = 0;
            foxtra = entity;
            tangon = arraySpread(foxtra, romeon, yankee);
            entity[tangon] = zuuluu;
            zuuluu = 1;
            zuuluu = tangon + zuuluu;
            michal['tags'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'replaceTag';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            michal = this;
            zuuluu = argFoo;
            var _closure3_slot0 = zuuluu;
            zuuluu = argBar;
            var _closure3_slot1 = zuuluu;
            tangon = michal.tags;
            zuuluu = tangon.map;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    zuuluu = _closure3_slot0;
                    if(!(entity === zuuluu)) { _fun00008_ip = 18; continue _fun00007 }
 14:
                    entity = _closure3_slot1;
 18:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['tags'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'exists';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.ids;
            michal = zuuluu.has;
            entity = argFoo;
            entity = entity.text;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'getChannelIds';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.channelIds;
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'getUserIds';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = global;
            entity = entity.Set;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            oscard = zuuluu;
            entity = new oscard[entity](report);
            entity = entity instanceof Object ? entity : zuuluu;
            var _closure3_slot1 = entity;
            zuuluu = this;
            tangon = zuuluu.tags;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    zuuluu = _closure1_slot10;
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    if(!zuuluu) { _fun00010_ip = 68; continue _fun00009 }
 20:
                    tangon = michal.userId;
                    report = michal.searchTokenType;
                    zuuluu = _closure3_slot0;
                    zuuluu = report === zuuluu;
                    if(!zuuluu) { _fun00010_ip = 51; continue _fun00009 }
 45:
                    report = null;
                    zuuluu = report != tangon;
 51:
                    if(!zuuluu) { _fun00010_ip = 68; continue _fun00009 }
 54:
                    zuuluu = _closure3_slot1;
                    michal = zuuluu.add;
                    michal = michal.bind(zuuluu)(tangon);
 68:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'isChannelTagsOnly';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            zuuluu = entity.tags;
            michal = zuuluu.filter;
            entity = _closure1_slot10;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.every;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.channelId;
                entity = null;
                entity = entity != michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'hasUserAddedTags';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            zuuluu = entity.tags;
            michal = zuuluu.filter;
            entity = _closure1_slot10;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.some;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.location;
                entity = _closure1_slot6;
                entity = entity.CLIENT_AUTO_ADD;
                entity = michal !== entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'isEmpty';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.tags;
            michal = entity.length;
            entity = 0;
            entity = entity === michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'getPrefixTag';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = this;
                michal = entity.tags;
                entity = entity.tags;
                zuuluu = entity.length;
                entity = 1;
                entity = zuuluu - entity;
                michal = michal[entity];
                entity = null;
                if(!(entity == michal)) { _fun00012_ip = 41; continue _fun00011 }
 37:
                entity = undefined;
                return entity;
 41:
                zuuluu = _closure1_slot9;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                if(!zuuluu) { _fun00012_ip = 61; continue _fun00011 }
 58:
                entity = michal;
 61:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'get';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.tags;
            return entity;
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'set';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = this;
            entity = argFoo;
            michal['tags'] = entity;
            entity = michal.markChanged;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'getQueryString';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = arguments[0];
                zuuluu = undefined;
                if(!(entity === zuuluu)) { _fun00014_ip = 13; continue _fun00013 }
 11:
                entity = false;
 13:
                var _closure3_slot0 = entity;
                entity = this;
                tangon = entity.tags;
                zuuluu = tangon.filter;
                entity = function(argFoo) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        zuuluu = _closure1_slot9;
                        michal = undefined;
                        entity = argFoo;
                        michal = zuuluu.bind(michal)(entity);
                        entity = !michal;
                        if(!michal) { _fun00016_ip = 30; continue _fun00015 }
 23:
                        entity = _closure3_slot0;
 30:
                        return entity;
                    }
                };
                report = zuuluu.bind(tangon)(entity);
                oscard = report.length;
                tangon = '';
                zuuluu = 0;
                entity = tangon;
                if(!(zuuluu !== oscard)) { _fun00014_ip = 110; continue _fun00013 }
 61:
                zuuluu = report.map;
                michal = function(argFoo) {
                    entity = argFoo;
                    entity = entity.text;
                    return entity;
                };
                report = zuuluu.bind(report)(michal);
                zuuluu = report.join;
                michal = ' ';
                zuuluu = zuuluu.bind(report)(michal);
                michal = global;
                michal = michal.HermesInternal;
                michal = michal.concat;
                entity = michal.bind(tangon)(zuuluu);
 110:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[12] = entity;
        entity = {};
        oscard = 'add';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tangon = argFoo;
                michal = this;
                entity = michal.exists;
                entity = entity.bind(michal)(tangon);
                if(entity) { _fun00018_ip = 223; continue _fun00017 }
 23:
                zuuluu = michal.tags;
                entity = michal.tags;
                entity = entity.length;
                oscard = 1;
                entity = entity - oscard;
                zuuluu = zuuluu[entity];
                entity = _closure1_slot9;
                golfie = undefined;
                entity = entity.bind(golfie)(tangon);
                if(!entity) { _fun00018_ip = 86; continue _fun00017 }
 68:
                entity = null;
                if(!(entity != zuuluu)) { _fun00018_ip = 86; continue _fun00017 }
 74:
                entity = _closure1_slot9;
                entity = entity.bind(golfie)(zuuluu);
                if(entity) { _fun00018_ip = 199; continue _fun00017 }
 86:
                option = tangon.type;
                entity = _closure1_slot5;
                entity = entity.ANSWER;
                if(!(option === entity)) { _fun00018_ip = 123; continue _fun00017 }
 105:
                entity = null;
                if(!(entity != zuuluu)) { _fun00018_ip = 123; continue _fun00017 }
 111:
                entity = _closure1_slot9;
                entity = entity.bind(golfie)(zuuluu);
                if(entity) { _fun00018_ip = 183; continue _fun00017 }
 123:
                entity = _closure1_slot9;
                entity = entity.bind(golfie)(tangon);
                if(entity) { _fun00018_ip = 144; continue _fun00017 }
 135:
                report = _closure1_slot10;
                entity = report.bind(golfie)(tangon);
 144:
                if(!entity) { _fun00018_ip = 213; continue _fun00017 }
 147:
                offset = michal.tags;
                entity = new Array(1);
                verify = 0;
                yankee = entity;
                report = arraySpread(yankee, offset, verify);
                entity[report] = tangon;
                report = report + oscard;
                michal['tags'] = entity;
                _fun00018_ip = 213; continue _fun00017;
 183:
                entity = michal.mergeTag;
                entity = entity.bind(michal)(zuuluu, tangon);
                _fun00018_ip = 213; continue _fun00017;
 199:
                entity = michal.replaceTag;
                entity = entity.bind(michal)(zuuluu, tangon);
 213:
                entity = michal.markChanged;
                entity = entity.bind(michal)();
 223:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[13] = entity;
        entity = {};
        oscard = 'removeAnyPrefixTags';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            tangon = michal.tags;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                zuuluu = _closure1_slot9;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                entity = !entity;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['tags'] = entity;
            entity = michal.markChanged;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[14] = entity;
        entity = {};
        oscard = 'removeAtIndex';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = this;
            tangon = michal.tags;
            zuuluu = argFoo;
            zuuluu = tangon[zuuluu];
            var _closure3_slot0 = zuuluu;
            tangon = michal.tags;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                michal = _closure3_slot0;
                entity = argFoo;
                entity = entity !== michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['tags'] = entity;
            entity = michal.markChanged;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[15] = entity;
        entity = {};
        oscard = 'reset';
        entity['key'] = oscard;
        report = function() { // Original name: value
            michal = this;
            entity = michal.defaultTags;
            michal['tags'] = entity;
            entity = michal.markChanged;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[16] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/stores/SearchQueryTagManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();