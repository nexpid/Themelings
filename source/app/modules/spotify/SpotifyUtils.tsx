// app/modules/spotify/SpotifyUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot13;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot13;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: asString
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zulu = 'string';
            mike = typeof entity;
            if(!(zulu !== mike)) { _fun00008_ip = 50; continue _fun00007 }
 14:
            mike = global;
            tango = mike.Error;
            mike = tango.prototype;
            zulu = Object.create(mike, {constructor: {value: tango}});
            report = 'value is not a string';
            oscar = zulu;
            mike = new oscar[tango](report, tango);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 50:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _getSpotifyMetadataFromActivity
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00010_ip = 345; continue _fun00009 }
 10:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 9;
                    mike = tango[mike];
                    options = undefined;
                    oscar = zulu.bind(options)(mike);
                    tango = oscar.getMetadata;
                    zulu = argFoo;
                    mike = argBar;
                    mike = tango.bind(oscar)(zulu, mike);
                    SaveGenerator(address=57);
 55:
                    return mike;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00010_ip = 342; continue _fun00009 }
 66:
                    oscar = _closure1_slot9;
                    golf = _closure1_slot14;
                    tango = mike.type;
                    zulu = null;
                    if(!(zulu == tango)) { _fun00010_ip = 95; continue _fun00009 }
 85:
                    verify = _closure1_slot8;
                    tango = verify.TRACK;
 95:
                    golf = golf.bind(options)(tango);
                    oscar = oscar.bind(options)(tango);
                    if(!(zulu !== oscar)) { _fun00010_ip = 285; continue _fun00009 }
 112:
                    zulu = {};
                    tango = mike.context_uri;
                    verify = 'string';
                    golf = typeof tango;
                    tango = undefined;
                    if(!(verify === golf)) { _fun00010_ip = 139; continue _fun00009 }
 133:
                    tango = mike.context_uri;
 139:
                    zulu['context_uri'] = tango;
                    golf = _closure1_slot14;
                    tango = mike.album_id;
                    golf = golf.bind(options)(tango);
                    zulu['album_id'] = tango;
                    tango = global;
                    verify = tango.Array;
                    options = verify.isArray;
                    golf = mike.artist_ids;
                    golf = options.bind(verify)(golf);
                    if(golf) { _fun00010_ip = 197; continue _fun00009 }
 191:
                    golf = new Array(0);
                    _fun00010_ip = 217; continue _fun00009;
 197:
                    offset = mike.artist_ids;
                    verify = offset.map;
                    options = _closure1_slot14;
                    golf = verify.bind(offset)(options);
 217:
                    zulu['artist_ids'] = golf;
                    zulu['type'] = oscar;
                    golf = tango.Array;
                    oscar = golf.isArray;
                    tango = mike.button_urls;
                    tango = oscar.bind(golf)(tango);
                    if(tango) { _fun00010_ip = 257; continue _fun00009 }
 251:
                    tango = new Array(0);
                    _fun00010_ip = 277; continue _fun00009;
 257:
                    golf = mike.button_urls;
                    oscar = golf.map;
                    report = _closure1_slot14;
                    tango = oscar.bind(golf)(report);
 277:
                    zulu['button_urls'] = tango;
                    return zulu;
 285:
                    zulu = global;
                    report = zulu.Error;
                    oscar = mike.type;
                    zulu = zulu.HermesInternal;
                    tango = zulu.concat;
                    zulu = 'invalid type ';
                    romeo = tango.bind(zulu)(oscar);
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    foxtrot = tango;
                    zulu = new foxtrot[report](romeo, yankee);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 342:
                    return mike;
 345:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.SPOTIFY_APP_PROTOCOL;
    var _closure1_slot7 = options;
    options = tango.SpotifyResourceTypes;
    var _closure1_slot8 = options;
    tango = tango.getSpotifyResourceType;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PlatformTypes;
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Millis;
    golf = tango.SECOND;
    tango = 30;
    tango = tango * golf;
    var _closure1_slot11 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/spotify/SpotifyUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: isSpotifyPlayable
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            entity = mike.getActiveSocketAndDevice;
            mike = entity.bind(mike)();
            entity = null;
            entity = entity != mike;
            if(entity) { _fun00012_ip = 39; continue _fun00011 }
 22:
            zulu = _closure1_slot5;
            mike = zulu.isProtocolRegistered;
            entity = mike.bind(zulu)();
 39:
            return entity;
        }
    };
    zulu['isSpotifyPlayable'] = tango;
    tango = function() { // Original name: ensureSpotifyPlayable
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zulu = _closure1_slot6;
            mike = zulu.getActiveSocketAndDevice;
            zulu = mike.bind(zulu)();
            mike = null;
            if(!(mike == zulu)) { _fun00014_ip = 323; continue _fun00013 }
 28:
            tango = _closure1_slot5;
            mike = tango.isProtocolRegistered;
            mike = mike.bind(tango)();
            if(mike) { _fun00014_ip = 98; continue _fun00013 }
 45:
            mike = global;
            report = mike.Promise;
            tango = report.reject;
            options = mike.Error;
            mike = options.prototype;
            golf = Object.create(mike, {constructor: {value: options}});
            romeo = 'protocol is not registered';
            foxtrot = golf;
            mike = new foxtrot[options](romeo, yankee);
            mike = mike instanceof Object ? mike : golf;
            mike = tango.bind(report)(mike);
            return mike;
 98:
            tango = _closure1_slot6;
            mike = tango.getPlayableComputerDevices;
            report = mike.bind(tango)();
            var _closure2_slot0 = report;
            options = _closure1_slot4;
            golf = options.isObservedAppRunning;
            verify = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 7;
            mike = tango[mike];
            tango = undefined;
            offset = verify.bind(tango)(mike);
            verify = offset.get;
            mike = _closure1_slot10;
            mike = mike.SPOTIFY;
            mike = verify.bind(offset)(mike);
            mike = mike.name;
            mike = golf.bind(options)(mike);
            if(!mike) { _fun00014_ip = 194; continue _fun00013 }
 183:
            golf = report.length;
            mike = 0;
            if(!(!(golf > mike))) { _fun00014_ip = 231; continue _fun00013 }
 194:
            golf = global;
            options = golf.Promise;
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            romeo = function(argFoo, argBar) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                mike = global;
                golf = mike.setTimeout;
                oscar = _closure1_slot11;
                entity = undefined;
                tango = function() {
                    tango = _closure1_slot6;
                    zulu = tango.removeChangeListener;
                    mike = _closure3_slot3;
                    mike = zulu.bind(tango)(mike);
                    zulu = _closure3_slot1;
                    entity = global;
                    tango = entity.Error;
                    entity = tango.prototype;
                    mike = Object.create(entity, {constructor: {value: tango}});
                    report = 'timeout launching spotify';
                    oscar = mike;
                    entity = new oscar[tango](report, tango);
                    mike = entity instanceof Object ? entity : mike;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                tango = golf.bind(entity)(tango, oscar);
                var _closure3_slot2 = tango;
                oscar = function() { // Original name: onSpotifyStoreChange
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        report = function(argFoo, argBar) { // Original name: _loop
                            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                mike = argFoo;
                                var _closure5_slot0 = mike;
                                mike = argBar;
                                var _closure5_slot1 = mike;
                                tango = _closure2_slot0;
                                zulu = tango.find;
                                mike = function(argFoo) {
                                    entity = argFoo;
                                    entity = entity.device;
                                    mike = entity.id;
                                    entity = _closure5_slot1;
                                    entity = entity.id;
                                    entity = mike === entity;
                                    return entity;
                                };
                                zulu = zulu.bind(tango)(mike);
                                mike = null;
                                if(!(mike == zulu)) { _fun00018_ip = 108; continue _fun00017 }
 46:
                                mike = global;
                                oscar = mike.clearTimeout;
                                report = _closure3_slot2;
                                zulu = undefined;
                                report = oscar.bind(zulu)(report);
                                oscar = _closure1_slot6;
                                report = oscar.removeChangeListener;
                                tango = _closure3_slot3;
                                tango = report.bind(oscar)(tango);
                                mike = mike.setImmediate;
                                entity = function() {
                                    zulu = _closure1_slot0;
                                    mike = _closure1_slot2;
                                    entity = 8;
                                    mike = mike[entity];
                                    entity = undefined;
                                    golf = zulu.bind(entity)(mike);
                                    oscar = golf.setActiveDevice;
                                    report = _closure5_slot0;
                                    zulu = report.accountId;
                                    tango = _closure5_slot1;
                                    mike = tango.id;
                                    mike = oscar.bind(golf)(zulu, mike);
                                    zulu = _closure3_slot0;
                                    mike = {};
                                    mike['socket'] = report;
                                    mike['device'] = tango;
                                    mike = zulu.bind(entity)(mike);
                                    return entity;
                                };
                                entity = mike.bind(zulu)(entity);
 108:
                                entity = undefined;
                                return entity;
                            }
                        };
                        zulu = _closure1_slot12;
                        mike = _closure1_slot6;
                        entity = mike.getPlayableComputerDevices;
                        mike = entity.bind(mike)();
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.bind(entity)();
                        mike = zulu.done;
                        if(mike) { _fun00016_ip = 87; continue _fun00015 }
 49:
                        mike = zulu.value;
                        oscar = mike.socket;
                        mike = mike.device;
                        mike = report.bind(entity)(oscar, mike);
                        oscar = tango.bind(entity)();
                        mike = oscar.done;
                        zulu = oscar;
                        if(!mike) { _fun00016_ip = 49; continue _fun00015 }
 87:
                        return entity;
                    }
                };
                var _closure3_slot3 = oscar;
                tango = _closure1_slot6;
                zulu = tango.addChangeListener;
                zulu = zulu.bind(tango)(oscar);
                tango = mike.window;
                zulu = tango.open;
                golf = _closure1_slot7;
                mike = mike.HermesInternal;
                oscar = mike.concat;
                report = '';
                mike = ':';
                mike = oscar.bind(report)(golf, mike);
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            foxtrot = golf;
            oscar = new foxtrot[options](romeo, yankee);
            oscar = oscar instanceof Object ? oscar : golf;
            return oscar;
 231:
            mike = report[mike];
            oscar = mike.socket;
            report = mike.device;
            mike = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 8;
            entity = golf[entity];
            golf = mike.bind(tango)(entity);
            tango = golf.setActiveDevice;
            mike = oscar.accountId;
            entity = report.id;
            entity = tango.bind(golf)(mike, entity);
            entity = global;
            tango = entity.Promise;
            mike = tango.resolve;
            entity = {};
            entity['socket'] = oscar;
            entity['device'] = report;
            entity = mike.bind(tango)(entity);
            return entity;
 323:
            entity = global;
            mike = entity.Promise;
            entity = mike.resolve;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    zulu['ensureSpotifyPlayable'] = tango;
    tango = function() { // Original name: isSpotifyPremium
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            mike = _closure1_slot6;
            entity = mike.getActiveSocketAndDevice;
            mike = entity.bind(mike)();
            entity = null;
            zulu = entity == mike;
            if(zulu) { _fun00020_ip = 38; continue _fun00019 }
 26:
            mike = mike.socket;
            entity = mike.isPremium;
 38:
            return entity;
        }
    };
    zulu['isSpotifyPremium'] = tango;
    tango = function() { // Original name: ensureSpotifyPremium
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tango = _closure1_slot6;
            mike = tango.getActiveSocketAndDevice;
            mike = mike.bind(tango)();
            tango = null;
            if(!(tango != mike)) { _fun00022_ip = 129; continue _fun00021 }
 25:
            mike = mike.socket;
            var _closure2_slot0 = mike;
            tango = mike.isPremium;
            if(tango) { _fun00022_ip = 109; continue _fun00021 }
 44:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 8;
            tango = tango[zulu];
            zulu = undefined;
            report = report.bind(zulu)(tango);
            tango = report.getProfile;
            zulu = mike.accountId;
            mike = mike.accessToken;
            zulu = tango.bind(report)(zulu, mike);
            mike = zulu.then;
            entity = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure2_slot0;
                    entity = entity.isPremium;
                    if(entity) { _fun00024_ip = 69; continue _fun00023 }
 16:
                    entity = global;
                    zulu = entity.Promise;
                    mike = zulu.reject;
                    report = entity.Error;
                    entity = report.prototype;
                    tango = Object.create(entity, {constructor: {value: report}});
                    oscar = 'spotify account is not premium';
                    golf = tango;
                    entity = new golf[report](oscar, report);
                    entity = entity instanceof Object ? entity : tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
 69:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            _fun00022_ip = 127; continue _fun00021;
 109:
            mike = global;
            zulu = mike.Promise;
            mike = zulu.resolve;
            entity = mike.bind(zulu)();
 127:
            return entity;
 129:
            entity = global;
            zulu = entity.Promise;
            mike = zulu.reject;
            report = entity.Error;
            entity = report.prototype;
            tango = Object.create(entity, {constructor: {value: report}});
            golf = 'no active profile';
            options = tango;
            entity = new options[report](golf, oscar);
            entity = entity instanceof Object ? entity : tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['ensureSpotifyPremium'] = tango;
    mike = function() { // Original name: getSpotifyMetadataFromActivity
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getSpotifyMetadataFromActivity'] = mike;
    return entity;
})();