// app/modules/search_v2/native/SearchQueryTagManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo) { // Original name: isPrefix
        entity = argFoo;
        mike = entity.type;
        entity = _closure1_slot5;
        entity = entity.PREFIX;
        entity = mike === entity;
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: isComplete
        entity = argFoo;
        mike = entity.type;
        entity = _closure1_slot5;
        entity = entity.COMPLETE;
        entity = mike === entity;
        return entity;
    };
    var _closure1_slot10 = entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SearchQueryTagTypes;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SearchFilterAddLocations;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.SearchTokenTypes;
    var _closure1_slot7 = golf;
    tango = tango.SearchTypes;
    var _closure1_slot8 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function(argFoo) { // Original name: SearchQueryTagManager
            _fun112369: for(var _fun112369_ip = 0; ; ) switch(_fun112369_ip) {
 0:
                oscar = argFoo;
                zulu = this;
                report = _closure1_slot2;
                mike = _closure2_slot0;
                entity = undefined;
                mike = report.bind(entity)(zulu, mike);
                golf = global;
                mike = golf.Set;
                report = mike.prototype;
                report = Object.create(report, {constructor: {value: mike}});
                output = report;
                mike = new output[mike](sizing);
                mike = mike instanceof Object ? mike : report;
                zulu['ids'] = mike;
                mike = golf.Set;
                report = mike.prototype;
                report = Object.create(report, {constructor: {value: mike}});
                output = report;
                mike = new output[mike](sizing);
                mike = mike instanceof Object ? mike : report;
                zulu['channelIds'] = mike;
                mike = 0;
                zulu['version'] = mike;
                report = oscar.type;
                mike = _closure1_slot8;
                mike = mike.GUILD_CHANNEL;
                if(!(report !== mike)) { _fun112369_ip = 130; continue _fun112369 }
 121:
                mike = new Array(0);
                _fun112369_ip = 317; continue _fun112369;
 130:
                verify = _closure1_slot4;
                options = verify.getChannel;
                report = oscar.channelId;
                report = options.bind(verify)(report);
                options = null;
                options = options == report;
                yankee = undefined;
                if(options) { _fun112369_ip = 165; continue _fun112369 }
 160:
                yankee = report.name;
 165:
                report = {};
                options = _closure1_slot5;
                options = options.COMPLETE;
                report['type'] = options;
                options = _closure1_slot7;
                options = options.FILTER_IN;
                report['searchTokenType'] = options;
                romeo = _closure1_slot0;
                foxtrot = _closure1_slot1;
                options = 6;
                verify = foxtrot[options];
                verify = romeo.bind(entity)(verify);
                offset = verify.intl;
                verify = offset.string;
                options = foxtrot[options];
                options = romeo.bind(entity)(options);
                options = options.t;
                options = options.WNpFHR;
                offset = verify.bind(offset)(options);
                golf = golf.HermesInternal;
                verify = golf.concat;
                options = '';
                golf = ': ';
                golf = verify.bind(options)(offset, golf, yankee);
                report['text'] = golf;
                oscar = oscar.channelId;
                report['channelId'] = oscar;
                tango = _closure1_slot6;
                tango = tango.CLIENT_AUTO_ADD;
                report['location'] = tango;
                tango = new Array(1);
                tango[0] = report;
                mike = tango;
 317:
                zulu['defaultTags'] = mike;
                mike = zulu.defaultTags;
                zulu['tags'] = mike;
                mike = zulu.markChanged;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'markChanged';
        entity['key'] = mike;
        mike = function() { // Original name: value
            mike = this;
            entity = global;
            zulu = entity.Set;
            report = zulu.prototype;
            report = Object.create(report, {constructor: {value: zulu}});
            options = report;
            zulu = new options[zulu](golf);
            zulu = zulu instanceof Object ? zulu : report;
            var _closure3_slot0 = zulu;
            entity = entity.Set;
            report = entity.prototype;
            report = Object.create(report, {constructor: {value: entity}});
            options = report;
            entity = new options[entity](golf);
            entity = entity instanceof Object ? entity : report;
            var _closure3_slot1 = entity;
            oscar = mike.tags;
            report = oscar.forEach;
            tango = function(argFoo) {
                _fun112371: for(var _fun112371_ip = 0; ; ) switch(_fun112371_ip) {
 0:
                    mike = argFoo;
                    report = _closure3_slot0;
                    tango = report.add;
                    entity = mike.text;
                    entity = tango.bind(report)(entity);
                    tango = _closure1_slot10;
                    entity = undefined;
                    tango = tango.bind(entity)(mike);
                    if(!tango) { _fun112371_ip = 53; continue _fun112371 }
 42:
                    oscar = mike.channelId;
                    report = null;
                    tango = report != oscar;
 53:
                    if(!tango) { _fun112371_ip = 75; continue _fun112371 }
 56:
                    tango = _closure3_slot1;
                    zulu = tango.add;
                    mike = mike.channelId;
                    mike = zulu.bind(tango)(mike);
 75:
                    return entity;
                }
            };
            tango = report.bind(oscar)(tango);
            mike['ids'] = zulu;
            mike['channelIds'] = entity;
            entity = mike.version;
            entity = entity + 1;
            mike['version'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(17);
        mike[0] = entity;
        entity = {};
        oscar = 'mergeTag';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            report = argFoo;
            tango = argBar;
            mike = this;
            var _closure3_slot0 = report;
            var _closure3_slot1 = tango;
            zulu = {};
            oscar = _closure1_slot5;
            oscar = oscar.COMPLETE;
            zulu['type'] = oscar;
            offset = report.text;
            verify = tango.text;
            oscar = global;
            oscar = oscar.HermesInternal;
            options = oscar.concat;
            golf = '';
            oscar = ' ';
            oscar = options.bind(golf)(offset, oscar, verify);
            zulu['text'] = oscar;
            oscar = report.location;
            zulu['location'] = oscar;
            report = report.searchTokenType;
            zulu['searchTokenType'] = report;
            report = tango.channelId;
            zulu['channelId'] = report;
            tango = tango.userId;
            zulu['userId'] = tango;
            report = mike.tags;
            tango = report.filter;
            entity = function(argFoo) {
                _fun112373: for(var _fun112373_ip = 0; ; ) switch(_fun112373_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure3_slot0;
                    entity = zulu !== entity;
                    if(!entity) { _fun112373_ip = 25; continue _fun112373 }
 17:
                    mike = _closure3_slot1;
                    entity = zulu !== mike;
 25:
                    return entity;
                }
            };
            romeo = tango.bind(report)(entity);
            entity = new Array(1);
            yankee = 0;
            foxtrot = entity;
            tango = arraySpread(foxtrot, romeo, yankee);
            entity[tango] = zulu;
            zulu = 1;
            zulu = tango + zulu;
            mike['tags'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'replaceTag';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            mike = this;
            zulu = argFoo;
            var _closure3_slot0 = zulu;
            zulu = argBar;
            var _closure3_slot1 = zulu;
            tango = mike.tags;
            zulu = tango.map;
            entity = function(argFoo) {
                _fun112375: for(var _fun112375_ip = 0; ; ) switch(_fun112375_ip) {
 0:
                    entity = argFoo;
                    zulu = _closure3_slot0;
                    if(!(entity === zulu)) { _fun112375_ip = 18; continue _fun112375 }
 14:
                    entity = _closure3_slot1;
 18:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity);
            mike['tags'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'exists';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.ids;
            mike = zulu.has;
            entity = argFoo;
            entity = entity.text;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'getChannelIds';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.channelIds;
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'getUserIds';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = global;
            entity = entity.Set;
            zulu = entity.prototype;
            zulu = Object.create(zulu, {constructor: {value: entity}});
            oscar = zulu;
            entity = new oscar[entity](report);
            entity = entity instanceof Object ? entity : zulu;
            var _closure3_slot1 = entity;
            zulu = this;
            tango = zulu.tags;
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun112379: for(var _fun112379_ip = 0; ; ) switch(_fun112379_ip) {
 0:
                    mike = argFoo;
                    zulu = _closure1_slot10;
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    if(!zulu) { _fun112379_ip = 68; continue _fun112379 }
 20:
                    tango = mike.userId;
                    report = mike.searchTokenType;
                    zulu = _closure3_slot0;
                    zulu = report === zulu;
                    if(!zulu) { _fun112379_ip = 51; continue _fun112379 }
 45:
                    report = null;
                    zulu = report != tango;
 51:
                    if(!zulu) { _fun112379_ip = 68; continue _fun112379 }
 54:
                    zulu = _closure3_slot1;
                    mike = zulu.add;
                    mike = mike.bind(zulu)(tango);
 68:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'isChannelTagsOnly';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            zulu = entity.tags;
            mike = zulu.filter;
            entity = _closure1_slot10;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.every;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.channelId;
                entity = null;
                entity = entity != mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'hasUserAddedTags';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            zulu = entity.tags;
            mike = zulu.filter;
            entity = _closure1_slot10;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.some;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.location;
                entity = _closure1_slot6;
                entity = entity.CLIENT_AUTO_ADD;
                entity = mike !== entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'isEmpty';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.tags;
            mike = entity.length;
            entity = 0;
            entity = entity === mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'getPrefixTag';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun112385: for(var _fun112385_ip = 0; ; ) switch(_fun112385_ip) {
 0:
                entity = this;
                mike = entity.tags;
                entity = entity.tags;
                zulu = entity.length;
                entity = 1;
                entity = zulu - entity;
                mike = mike[entity];
                entity = null;
                if(!(entity == mike)) { _fun112385_ip = 41; continue _fun112385 }
 37:
                entity = undefined;
                return entity;
 41:
                zulu = _closure1_slot9;
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                if(!zulu) { _fun112385_ip = 61; continue _fun112385 }
 58:
                entity = mike;
 61:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'get';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity.tags;
            return entity;
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'set';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            entity = argFoo;
            mike['tags'] = entity;
            entity = mike.markChanged;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'getQueryString';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun112388: for(var _fun112388_ip = 0; ; ) switch(_fun112388_ip) {
 0:
                entity = arguments[0];
                zulu = undefined;
                if(!(entity === zulu)) { _fun112388_ip = 13; continue _fun112388 }
 11:
                entity = false;
 13:
                var _closure3_slot0 = entity;
                entity = this;
                tango = entity.tags;
                zulu = tango.filter;
                entity = function(argFoo) {
                    _fun112389: for(var _fun112389_ip = 0; ; ) switch(_fun112389_ip) {
 0:
                        zulu = _closure1_slot9;
                        mike = undefined;
                        entity = argFoo;
                        mike = zulu.bind(mike)(entity);
                        entity = !mike;
                        if(!mike) { _fun112389_ip = 30; continue _fun112389 }
 23:
                        entity = _closure3_slot0;
 30:
                        return entity;
                    }
                };
                report = zulu.bind(tango)(entity);
                oscar = report.length;
                tango = '';
                zulu = 0;
                entity = tango;
                if(!(zulu !== oscar)) { _fun112388_ip = 110; continue _fun112388 }
 61:
                zulu = report.map;
                mike = function(argFoo) {
                    entity = argFoo;
                    entity = entity.text;
                    return entity;
                };
                report = zulu.bind(report)(mike);
                zulu = report.join;
                mike = ' ';
                zulu = zulu.bind(report)(mike);
                mike = global;
                mike = mike.HermesInternal;
                mike = mike.concat;
                entity = mike.bind(tango)(zulu);
 110:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'add';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun112391: for(var _fun112391_ip = 0; ; ) switch(_fun112391_ip) {
 0:
                tango = argFoo;
                mike = this;
                entity = mike.exists;
                entity = entity.bind(mike)(tango);
                if(entity) { _fun112391_ip = 223; continue _fun112391 }
 23:
                zulu = mike.tags;
                entity = mike.tags;
                entity = entity.length;
                oscar = 1;
                entity = entity - oscar;
                zulu = zulu[entity];
                entity = _closure1_slot9;
                golf = undefined;
                entity = entity.bind(golf)(tango);
                if(!entity) { _fun112391_ip = 86; continue _fun112391 }
 68:
                entity = null;
                if(!(entity != zulu)) { _fun112391_ip = 86; continue _fun112391 }
 74:
                entity = _closure1_slot9;
                entity = entity.bind(golf)(zulu);
                if(entity) { _fun112391_ip = 199; continue _fun112391 }
 86:
                options = tango.type;
                entity = _closure1_slot5;
                entity = entity.ANSWER;
                if(!(options === entity)) { _fun112391_ip = 123; continue _fun112391 }
 105:
                entity = null;
                if(!(entity != zulu)) { _fun112391_ip = 123; continue _fun112391 }
 111:
                entity = _closure1_slot9;
                entity = entity.bind(golf)(zulu);
                if(entity) { _fun112391_ip = 183; continue _fun112391 }
 123:
                entity = _closure1_slot9;
                entity = entity.bind(golf)(tango);
                if(entity) { _fun112391_ip = 144; continue _fun112391 }
 135:
                report = _closure1_slot10;
                entity = report.bind(golf)(tango);
 144:
                if(!entity) { _fun112391_ip = 213; continue _fun112391 }
 147:
                offset = mike.tags;
                entity = new Array(1);
                verify = 0;
                yankee = entity;
                report = arraySpread(yankee, offset, verify);
                entity[report] = tango;
                report = report + oscar;
                mike['tags'] = entity;
                _fun112391_ip = 213; continue _fun112391;
 183:
                entity = mike.mergeTag;
                entity = entity.bind(mike)(zulu, tango);
                _fun112391_ip = 213; continue _fun112391;
 199:
                entity = mike.replaceTag;
                entity = entity.bind(mike)(zulu, tango);
 213:
                entity = mike.markChanged;
                entity = entity.bind(mike)();
 223:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[13] = entity;
        entity = {};
        oscar = 'removeAnyPrefixTags';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            tango = mike.tags;
            zulu = tango.filter;
            entity = function(argFoo) {
                zulu = _closure1_slot9;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                entity = !entity;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            mike['tags'] = entity;
            entity = mike.markChanged;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[14] = entity;
        entity = {};
        oscar = 'removeAtIndex';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = this;
            tango = mike.tags;
            zulu = argFoo;
            zulu = tango[zulu];
            var _closure3_slot0 = zulu;
            tango = mike.tags;
            zulu = tango.filter;
            entity = function(argFoo) {
                mike = _closure3_slot0;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            mike['tags'] = entity;
            entity = mike.markChanged;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[15] = entity;
        entity = {};
        oscar = 'reset';
        entity['key'] = oscar;
        report = function() { // Original name: value
            mike = this;
            entity = mike.defaultTags;
            mike['tags'] = entity;
            entity = mike.markChanged;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[16] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/SearchQueryTagManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();