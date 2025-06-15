// app/modules/spotify/SpotifyUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot13;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot13;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: asString
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = 'string';
            michal = typeof entity;
            if(!(zuuluu !== michal)) { _fun00008_ip = 50; continue _fun00007 }
 14:
            michal = global;
            tangon = michal.Error;
            michal = tangon.prototype;
            zuuluu = Object.create(michal, {constructor: {value: tangon}});
            report = 'value is not a string';
            oscard = zuuluu;
            michal = new oscard[tangon](report, tangon);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 50:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _getSpotifyMetadataFromActivity
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 345; continue _fun00009 }
 10:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 9;
                    michal = tangon[michal];
                    option = undefined;
                    oscard = zuuluu.bind(option)(michal);
                    tangon = oscard.getMetadata;
                    zuuluu = argFoo;
                    michal = argBar;
                    michal = tangon.bind(oscard)(zuuluu, michal);
                    SaveGenerator(address=57);
 55:
                    return michal;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 342; continue _fun00009 }
 66:
                    oscard = _closure1_slot9;
                    golfie = _closure1_slot14;
                    tangon = michal.type;
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00010_ip = 95; continue _fun00009 }
 85:
                    verify = _closure1_slot8;
                    tangon = verify.TRACK;
 95:
                    golfie = golfie.bind(option)(tangon);
                    oscard = oscard.bind(option)(tangon);
                    if(!(zuuluu !== oscard)) { _fun00010_ip = 285; continue _fun00009 }
 112:
                    zuuluu = {};
                    tangon = michal.context_uri;
                    verify = 'string';
                    golfie = typeof tangon;
                    tangon = undefined;
                    if(!(verify === golfie)) { _fun00010_ip = 139; continue _fun00009 }
 133:
                    tangon = michal.context_uri;
 139:
                    zuuluu['context_uri'] = tangon;
                    golfie = _closure1_slot14;
                    tangon = michal.album_id;
                    golfie = golfie.bind(option)(tangon);
                    zuuluu['album_id'] = tangon;
                    tangon = global;
                    verify = tangon.Array;
                    option = verify.isArray;
                    golfie = michal.artist_ids;
                    golfie = option.bind(verify)(golfie);
                    if(golfie) { _fun00010_ip = 197; continue _fun00009 }
 191:
                    golfie = new Array(0);
                    _fun00010_ip = 217; continue _fun00009;
 197:
                    offset = michal.artist_ids;
                    verify = offset.map;
                    option = _closure1_slot14;
                    golfie = verify.bind(offset)(option);
 217:
                    zuuluu['artist_ids'] = golfie;
                    zuuluu['type'] = oscard;
                    golfie = tangon.Array;
                    oscard = golfie.isArray;
                    tangon = michal.button_urls;
                    tangon = oscard.bind(golfie)(tangon);
                    if(tangon) { _fun00010_ip = 257; continue _fun00009 }
 251:
                    tangon = new Array(0);
                    _fun00010_ip = 277; continue _fun00009;
 257:
                    golfie = michal.button_urls;
                    oscard = golfie.map;
                    report = _closure1_slot14;
                    tangon = oscard.bind(golfie)(report);
 277:
                    zuuluu['button_urls'] = tangon;
                    return zuuluu;
 285:
                    zuuluu = global;
                    report = zuuluu.Error;
                    oscard = michal.type;
                    zuuluu = zuuluu.HermesInternal;
                    tangon = zuuluu.concat;
                    zuuluu = 'invalid type ';
                    romeon = tangon.bind(zuuluu)(oscard);
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    foxtra = tangon;
                    zuuluu = new foxtra[report](romeon, yankee);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 342:
                    return michal;
 345:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.SPOTIFY_APP_PROTOCOL;
    var _closure1_slot7 = option;
    option = tangon.SpotifyResourceTypes;
    var _closure1_slot8 = option;
    tangon = tangon.getSpotifyResourceType;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PlatformTypes;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Millis;
    golfie = tangon.SECOND;
    tangon = 30;
    tangon = tangon * golfie;
    var _closure1_slot11 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/spotify/SpotifyUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: isSpotifyPlayable
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            entity = michal.getActiveSocketAndDevice;
            michal = entity.bind(michal)();
            entity = null;
            entity = entity != michal;
            if(entity) { _fun00012_ip = 39; continue _fun00011 }
 22:
            zuuluu = _closure1_slot5;
            michal = zuuluu.isProtocolRegistered;
            entity = michal.bind(zuuluu)();
 39:
            return entity;
        }
    };
    zuuluu['isSpotifyPlayable'] = tangon;
    tangon = function() { // Original name: ensureSpotifyPlayable
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = _closure1_slot6;
            michal = zuuluu.getActiveSocketAndDevice;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            if(!(michal == zuuluu)) { _fun00014_ip = 321; continue _fun00013 }
 28:
            tangon = _closure1_slot5;
            michal = tangon.isProtocolRegistered;
            michal = michal.bind(tangon)();
            if(michal) { _fun00014_ip = 98; continue _fun00013 }
 45:
            michal = global;
            report = michal.Promise;
            tangon = report.reject;
            option = michal.Error;
            michal = option.prototype;
            golfie = Object.create(michal, {constructor: {value: option}});
            romeon = 'protocol is not registered';
            foxtra = golfie;
            michal = new foxtra[option](romeon, yankee);
            michal = michal instanceof Object ? michal : golfie;
            michal = tangon.bind(report)(michal);
            return michal;
 98:
            tangon = _closure1_slot6;
            michal = tangon.getPlayableComputerDevices;
            report = michal.bind(tangon)();
            var _closure2_slot0 = report;
            option = _closure1_slot4;
            golfie = option.isObservedAppRunning;
            verify = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 7;
            michal = tangon[michal];
            tangon = undefined;
            offset = verify.bind(tangon)(michal);
            verify = offset.get;
            michal = _closure1_slot10;
            michal = michal.SPOTIFY;
            michal = verify.bind(offset)(michal);
            michal = michal.name;
            michal = golfie.bind(option)(michal);
            if(!michal) { _fun00014_ip = 194; continue _fun00013 }
 183:
            golfie = report.length;
            michal = 0;
            if(!(!(golfie > michal))) { _fun00014_ip = 229; continue _fun00013 }
 194:
            golfie = global;
            option = golfie.Promise;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            romeon = function(argFoo, argBar) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = argBar;
                var _closure3_slot1 = entity;
                michal = global;
                golfie = michal.setTimeout;
                oscard = _closure1_slot11;
                entity = undefined;
                tangon = function() {
                    tangon = _closure1_slot6;
                    zuuluu = tangon.removeChangeListener;
                    michal = _closure3_slot3;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = _closure3_slot1;
                    entity = global;
                    tangon = entity.Error;
                    entity = tangon.prototype;
                    michal = Object.create(entity, {constructor: {value: tangon}});
                    report = 'timeout launching spotify';
                    oscard = michal;
                    entity = new oscard[tangon](report, tangon);
                    michal = entity instanceof Object ? entity : michal;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                tangon = golfie.bind(entity)(tangon, oscard);
                var _closure3_slot2 = tangon;
                oscard = function() { // Original name: onSpotifyStoreChange
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        report = function(argFoo, argBar) { // Original name: _loop
                            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                michal = argFoo;
                                var _closure5_slot0 = michal;
                                michal = argBar;
                                var _closure5_slot1 = michal;
                                tangon = _closure2_slot0;
                                zuuluu = tangon.find;
                                michal = function(argFoo) {
                                    entity = argFoo;
                                    entity = entity.device;
                                    michal = entity.id;
                                    entity = _closure5_slot1;
                                    entity = entity.id;
                                    entity = michal === entity;
                                    return entity;
                                };
                                zuuluu = zuuluu.bind(tangon)(michal);
                                michal = null;
                                if(!(michal == zuuluu)) { _fun00018_ip = 105; continue _fun00017 }
 45:
                                michal = global;
                                oscard = michal.clearTimeout;
                                report = _closure3_slot2;
                                zuuluu = undefined;
                                report = oscard.bind(zuuluu)(report);
                                oscard = _closure1_slot6;
                                report = oscard.removeChangeListener;
                                tangon = _closure3_slot3;
                                tangon = report.bind(oscard)(tangon);
                                michal = michal.setImmediate;
                                entity = function() {
                                    zuuluu = _closure1_slot0;
                                    michal = _closure1_slot2;
                                    entity = 8;
                                    michal = michal[entity];
                                    entity = undefined;
                                    golfie = zuuluu.bind(entity)(michal);
                                    oscard = golfie.setActiveDevice;
                                    report = _closure5_slot0;
                                    zuuluu = report.accountId;
                                    tangon = _closure5_slot1;
                                    michal = tangon.id;
                                    michal = oscard.bind(golfie)(zuuluu, michal);
                                    zuuluu = _closure3_slot0;
                                    michal = {};
                                    michal['socket'] = report;
                                    michal['device'] = tangon;
                                    michal = zuuluu.bind(entity)(michal);
                                    return entity;
                                };
                                entity = michal.bind(zuuluu)(entity);
 105:
                                entity = undefined;
                                return entity;
                            }
                        };
                        zuuluu = _closure1_slot12;
                        michal = _closure1_slot6;
                        entity = michal.getPlayableComputerDevices;
                        michal = entity.bind(michal)();
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.bind(entity)();
                        michal = zuuluu.done;
                        if(michal) { _fun00016_ip = 85; continue _fun00015 }
 47:
                        michal = zuuluu.value;
                        oscard = michal.socket;
                        michal = michal.device;
                        michal = report.bind(entity)(oscard, michal);
                        oscard = tangon.bind(entity)();
                        michal = oscard.done;
                        zuuluu = oscard;
                        if(!michal) { _fun00016_ip = 47; continue _fun00015 }
 85:
                        return entity;
                    }
                };
                var _closure3_slot3 = oscard;
                tangon = _closure1_slot6;
                zuuluu = tangon.addChangeListener;
                zuuluu = zuuluu.bind(tangon)(oscard);
                tangon = michal.window;
                zuuluu = tangon.open;
                golfie = _closure1_slot7;
                michal = michal.HermesInternal;
                oscard = michal.concat;
                report = '';
                michal = ':';
                michal = oscard.bind(report)(golfie, michal);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            foxtra = golfie;
            oscard = new foxtra[option](romeon, yankee);
            oscard = oscard instanceof Object ? oscard : golfie;
            return oscard;
 229:
            michal = report[michal];
            oscard = michal.socket;
            report = michal.device;
            michal = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 8;
            entity = golfie[entity];
            golfie = michal.bind(tangon)(entity);
            tangon = golfie.setActiveDevice;
            michal = oscard.accountId;
            entity = report.id;
            entity = tangon.bind(golfie)(michal, entity);
            entity = global;
            tangon = entity.Promise;
            michal = tangon.resolve;
            entity = {};
            entity['socket'] = oscard;
            entity['device'] = report;
            entity = michal.bind(tangon)(entity);
            return entity;
 321:
            entity = global;
            michal = entity.Promise;
            entity = michal.resolve;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    zuuluu['ensureSpotifyPlayable'] = tangon;
    tangon = function() { // Original name: isSpotifyPremium
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = _closure1_slot6;
            entity = michal.getActiveSocketAndDevice;
            michal = entity.bind(michal)();
            entity = null;
            zuuluu = entity == michal;
            if(zuuluu) { _fun00020_ip = 38; continue _fun00019 }
 26:
            michal = michal.socket;
            entity = michal.isPremium;
 38:
            return entity;
        }
    };
    zuuluu['isSpotifyPremium'] = tangon;
    tangon = function() { // Original name: ensureSpotifyPremium
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tangon = _closure1_slot6;
            michal = tangon.getActiveSocketAndDevice;
            michal = michal.bind(tangon)();
            tangon = null;
            if(!(tangon != michal)) { _fun00022_ip = 127; continue _fun00021 }
 25:
            michal = michal.socket;
            var _closure2_slot0 = michal;
            tangon = michal.isPremium;
            if(tangon) { _fun00022_ip = 107; continue _fun00021 }
 44:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 8;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.getProfile;
            zuuluu = michal.accountId;
            michal = michal.accessToken;
            zuuluu = tangon.bind(report)(zuuluu, michal);
            michal = zuuluu.then;
            entity = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure2_slot0;
                    entity = entity.isPremium;
                    if(entity) { _fun00024_ip = 69; continue _fun00023 }
 16:
                    entity = global;
                    zuuluu = entity.Promise;
                    michal = zuuluu.reject;
                    report = entity.Error;
                    entity = report.prototype;
                    tangon = Object.create(entity, {constructor: {value: report}});
                    oscard = 'spotify account is not premium';
                    golfie = tangon;
                    entity = new golfie[report](oscard, report);
                    entity = entity instanceof Object ? entity : tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
 69:
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            _fun00022_ip = 125; continue _fun00021;
 107:
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.resolve;
            entity = michal.bind(zuuluu)();
 125:
            return entity;
 127:
            entity = global;
            zuuluu = entity.Promise;
            michal = zuuluu.reject;
            report = entity.Error;
            entity = report.prototype;
            tangon = Object.create(entity, {constructor: {value: report}});
            golfie = 'no active profile';
            option = tangon;
            entity = new option[report](golfie, oscard);
            entity = entity instanceof Object ? entity : tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['ensureSpotifyPremium'] = tangon;
    michal = function() { // Original name: getSpotifyMetadataFromActivity
        entity = undefined;
        tangon = _closure1_slot15;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getSpotifyMetadataFromActivity'] = michal;
    return entity;
})();