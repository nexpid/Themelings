// app/modules/favorites/FavoriteStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: initializeFromUserSettings
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot7;
            entity = entity.settings;
            michal = entity.favorites;
            offset = null;
            tangon = offset == michal;
            entity = undefined;
            zuuluu = undefined;
            if(tangon) { _fun00004_ip = 38; continue _fun00003 }
 32:
            zuuluu = michal.muted;
 38:
            michal = offset != zuuluu;
            if(!michal) { _fun00004_ip = 48; continue _fun00003 }
 45:
            michal = zuuluu;
 48:
            _closure1_slot12 = michal;
            michal = {};
            _closure1_slot11 = michal;
            michal = _closure1_slot7;
            michal = michal.settings;
            michal = michal.favorites;
            zuuluu = offset == michal;
            verify = undefined;
            if(zuuluu) { _fun00004_ip = 89; continue _fun00003 }
 83:
            verify = michal.favoriteChannels;
 89:
            if(!(offset != verify)) { _fun00004_ip = 213; continue _fun00003 }
 93:
            golfie = verify;
            zuuluu = '0';
            michal = '';
            for(tangon in golfie)
 114:
            {
 123:
                backup = tangon;
                sizing = verify[backup];
                foxtra = _closure1_slot11;
                romeon = {};
                romeon['id'] = backup;
                output = sizing.nickname;
                kiloes = null;
                if(!(michal !== output)) { _fun00004_ip = 158; continue _fun00003 }
 152:
                kiloes = sizing.nickname;
 158:
                romeon['nickname'] = kiloes;
                kiloes = sizing.type;
                romeon['type'] = kiloes;
                kiloes = sizing.position;
                romeon['order'] = kiloes;
                output = sizing.parentId;
                kiloes = null;
                if(!(zuuluu !== output)) { _fun00004_ip = 200; continue _fun00003 }
 194:
                kiloes = sizing.parentId;
 200:
                romeon['parentId'] = kiloes;
                foxtra[backup] = romeon;
                _fun00004_ip = 114; continue _fun00003;
            }
 211:
            return entity;
 213:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot2 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 3;
    golfie = oscard[golfie];
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 4;
    golfie = oscard[golfie];
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 5;
    golfie = oscard[golfie];
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot7 = golfie;
    golfie = 6;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.createChannelRecord;
    var _closure1_slot8 = golfie;
    golfie = 7;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    option = golfie.ChannelTypes;
    var _closure1_slot9 = option;
    golfie = golfie.FAVORITES;
    var _closure1_slot10 = golfie;
    golfie = {};
    var _closure1_slot11 = golfie;
    golfie = false;
    var _closure1_slot12 = golfie;
    golfie = 9;
    golfie = oscard[golfie];
    golfie = tangon.bind(entity)(golfie);
    golfie = golfie.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: FavoriteStore
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot13;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00006_ip = 69; continue _fun00005 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00006_ip = 105; continue _fun00005;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            report = this;
            zuuluu = report.waitFor;
            entity = _closure1_slot7;
            entity = zuuluu.bind(report)(entity);
            tangon = _closure1_slot14;
            entity = undefined;
            zuuluu = tangon.bind(entity)();
            zuuluu = report.syncWith;
            oscard = _closure1_slot7;
            michal = new Array(1);
            michal[0] = oscard;
            michal = zuuluu.bind(report)(michal, tangon);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'getFavoriteChannels';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'favoriteServerMuted';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot12;
            return entity;
        };
        report['get'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'isFavorite';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = argFoo;
                zuuluu = null;
                entity = zuuluu != tangon;
                if(!entity) { _fun00008_ip = 27; continue _fun00007 }
 12:
                michal = _closure1_slot11;
                michal = michal[tangon];
                entity = zuuluu != michal;
 27:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getFavorite';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = argFoo;
                entity = null;
                if(!(entity == michal)) { _fun00010_ip = 13; continue _fun00009 }
 9:
                entity = undefined;
                return entity;
 13:
                entity = _closure1_slot11;
                entity = entity[michal];
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getCategoryRecord';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                entity = _closure1_slot11;
                michal = zuuluu in entity;
                golfie = null;
                entity = null;
                if(!michal) { _fun00012_ip = 161; continue _fun00011 }
 24:
                michal = _closure1_slot11;
                michal = michal[zuuluu];
                oscard = michal.type;
                option = _closure1_slot0;
                tangon = _closure1_slot1;
                michal = 8;
                michal = tangon[michal];
                tangon = undefined;
                michal = option.bind(tangon)(michal);
                michal = michal.FavoriteChannelType;
                michal = michal.CATEGORY;
                entity = null;
                if(!(oscard === michal)) { _fun00012_ip = 161; continue _fun00011 }
 77:
                michal = _closure1_slot11;
                oscard = michal[zuuluu];
                zuuluu = _closure1_slot8;
                michal = {};
                option = oscard.id;
                michal['id'] = option;
                option = oscard.nickname;
                verify = golfie != option;
                golfie = '';
                if(!verify) { _fun00012_ip = 120; continue _fun00011 }
 117:
                golfie = option;
 120:
                michal['name'] = golfie;
                golfie = _closure1_slot9;
                golfie = golfie.GUILD_CATEGORY;
                michal['type'] = golfie;
                oscard = oscard.order;
                michal['position'] = oscard;
                report = _closure1_slot10;
                michal['guild_id'] = report;
                entity = zuuluu.bind(tangon)(michal);
 161:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getNickname';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.getFavorite;
                entity = argFoo;
                tangon = michal.bind(zuuluu)(entity);
                zuuluu = null;
                report = zuuluu == tangon;
                michal = undefined;
                if(report) { _fun00014_ip = 34; continue _fun00013 }
 28:
                michal = tangon.nickname;
 34:
                zuuluu = zuuluu != michal;
                entity = undefined;
                if(!zuuluu) { _fun00014_ip = 46; continue _fun00013 }
 43:
                entity = michal;
 46:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(golfie);
    michal = 'FavoriteStore';
    option['displayName'] = michal;
    michal = 10;
    michal = oscard[michal];
    romeon = tangon.bind(entity)(michal);
    michal = option.prototype;
    tangon = Object.create(michal, {constructor: {value: option}});
    yankee = {};
    foxtra = tangon;
    michal = new foxtra[option](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/favorites/FavoriteStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();