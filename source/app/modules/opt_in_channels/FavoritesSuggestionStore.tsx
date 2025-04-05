// app/modules/opt_in_channels/FavoritesSuggestionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
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
            _closure1_slot11 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: handleChange
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot6;
            entity = zuuluu.getChannelId;
            tangon = entity.bind(zuuluu)();
            report = null;
            if(!(report != tangon)) { _fun00004_ip = 324; continue _fun00003 }
 26:
            zuuluu = _closure1_slot5;
            entity = zuuluu.getChannel;
            entity = entity.bind(zuuluu)(tangon);
            if(!(report != entity)) { _fun00004_ip = 324; continue _fun00003 }
 47:
            zuuluu = entity.guild_id;
            if(!(report != zuuluu)) { _fun00004_ip = 324; continue _fun00003 }
 59:
            zuuluu = entity.guild_id;
            oscard = _closure1_slot10;
            oscard = oscard[tangon];
            if(!(report == oscard)) { _fun00004_ip = 86; continue _fun00003 }
 76:
            golfie = _closure1_slot10;
            oscard = 0;
            golfie[tangon] = oscard;
 86:
            oscard = entity.isThread;
            oscard = oscard.bind(entity)();
            if(oscard) { _fun00004_ip = 328; continue _fun00003 }
 102:
            golfie = _closure1_slot7;
            oscard = golfie.isOptInEnabled;
            oscard = oscard.bind(golfie)(zuuluu);
            if(!oscard) { _fun00004_ip = 147; continue _fun00003 }
 120:
            golfie = _closure1_slot7;
            oscard = golfie.isChannelOrParentOptedIn;
            entity = entity.id;
            entity = oscard.bind(golfie)(zuuluu, entity);
            if(!entity) { _fun00004_ip = 328; continue _fun00003 }
 147:
            oscard = _closure1_slot10;
            entity = oscard[tangon];
            entity = entity + 1;
            oscard[tangon] = entity;
            entity = _closure1_slot8;
            entity = entity[zuuluu];
            if(!(report == entity)) { _fun00004_ip = 210; continue _fun00003 }
 174:
            oscard = _closure1_slot8;
            entity = global;
            entity = entity.Set;
            golfie = entity.prototype;
            golfie = Object.create(golfie, {constructor: {value: entity}});
            offset = golfie;
            entity = new offset[entity](verify);
            entity = entity instanceof Object ? entity : golfie;
            oscard[zuuluu] = entity;
 210:
            oscard = _closure1_slot7;
            entity = oscard.isFavorite;
            entity = entity.bind(oscard)(zuuluu, tangon);
            if(entity) { _fun00004_ip = 306; continue _fun00003 }
 229:
            entity = _closure1_slot9;
            entity = entity[zuuluu];
            if(!(report != entity)) { _fun00004_ip = 264; continue _fun00003 }
 241:
            entity = _closure1_slot9;
            oscard = entity[zuuluu];
            entity = oscard.has;
            oscard = entity.bind(oscard)(tangon);
            entity = undefined;
            if(oscard) { _fun00004_ip = 304; continue _fun00003 }
 264:
            oscard = _closure1_slot10;
            golfie = oscard[tangon];
            oscard = 50;
            oscard = golfie > oscard;
            entity = undefined;
            if(!oscard) { _fun00004_ip = 304; continue _fun00003 }
 284:
            oscard = _closure1_slot8;
            golfie = oscard[zuuluu];
            oscard = golfie.add;
            oscard = oscard.bind(golfie)(tangon);
            entity = true;
 304:
            return entity;
 306:
            entity = _closure1_slot8;
            oscard = entity[zuuluu];
            entity = oscard.delete;
            entity = entity.bind(oscard)(tangon);
 324:
            entity = undefined;
            return entity;
 328:
            entity = _closure1_slot10;
            entity = delete entity[tangon];
            entity = _closure1_slot8;
            entity = entity[zuuluu];
            entity = report != entity;
            if(!entity) { _fun00004_ip = 369; continue _fun00003 }
 351:
            michal = _closure1_slot8;
            zuuluu = michal[zuuluu];
            michal = zuuluu.delete;
            entity = michal.bind(zuuluu)(tangon);
 369:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = report[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    var _closure1_slot0 = michal;
    michal = 1;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot1 = michal;
    michal = 2;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 3;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 4;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 6;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 7;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = {};
    var _closure1_slot8 = michal;
    michal = {};
    var _closure1_slot9 = michal;
    michal = {};
    var _closure1_slot10 = michal;
    michal = 8;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: FavoritesSuggestionStore
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot0;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot3;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot2;
                entity = _closure1_slot11;
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
                oscard = _closure1_slot3;
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
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                oscard = this;
                report = oscard.syncWith;
                zuuluu = _closure1_slot6;
                tangon = new Array(1);
                tangon[0] = zuuluu;
                zuuluu = _closure1_slot12;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                zuuluu = null;
                if(!(zuuluu != entity)) { _fun00008_ip = 272; continue _fun00007 }
 46:
                yankee = entity.suggestedChannels;
                offset = entity.dismissedSuggestions;
                entity = entity.channelOpensByChannelId;
                if(!(zuuluu != yankee)) { _fun00008_ip = 163; continue _fun00007 }
 68:
                option = yankee;
                tangon = global;
                for(report in option)
 81:
                {
 90:
                    backup = report;
                    foxtra = _closure1_slot8;
                    sizing = tangon.Set;
                    result = yankee[backup];
                    kiloes = sizing.prototype;
                    kiloes = Object.create(kiloes, {constructor: {value: sizing}});
                    echoed = kiloes;
                    romeon = new echoed[sizing](result, output);
                    romeon = romeon instanceof Object ? romeon : kiloes;
                    if(!(zuuluu == romeon)) { _fun00008_ip = 157; continue _fun00007 }
 131:
                    kiloes = tangon.Set;
                    sizing = kiloes.prototype;
                    sizing = Object.create(sizing, {constructor: {value: kiloes}});
                    echoed = sizing;
                    kiloes = new echoed[kiloes](result);
                    romeon = kiloes instanceof Object ? kiloes : sizing;
 157:
                    foxtra[backup] = romeon;
                    _fun00008_ip = 81; continue _fun00007;
                }
 163:
                if(!(zuuluu != offset)) { _fun00008_ip = 262; continue _fun00007 }
 167:
                option = offset;
                tangon = global;
                for(report in option)
 180:
                {
 189:
                    foxtra = report;
                    romeon = _closure1_slot9;
                    kiloes = tangon.Set;
                    result = offset[foxtra];
                    backup = kiloes.prototype;
                    backup = Object.create(backup, {constructor: {value: kiloes}});
                    echoed = backup;
                    yankee = new echoed[kiloes](result, output);
                    yankee = yankee instanceof Object ? yankee : backup;
                    if(!(zuuluu == yankee)) { _fun00008_ip = 256; continue _fun00007 }
 230:
                    backup = tangon.Set;
                    kiloes = backup.prototype;
                    kiloes = Object.create(kiloes, {constructor: {value: backup}});
                    echoed = kiloes;
                    backup = new echoed[backup](result);
                    yankee = backup instanceof Object ? backup : kiloes;
 256:
                    romeon[foxtra] = yankee;
                    _fun00008_ip = 180; continue _fun00007;
                }
 262:
                if(!(zuuluu == entity)) { _fun00008_ip = 268; continue _fun00007 }
 266:
                entity = {};
 268:
                _closure1_slot10 = entity;
 272:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'getSuggestedChannelId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = null;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = {};
            michal = {};
            entity['suggestedChannels'] = michal;
            michal = {};
            entity['dismissedSuggestions'] = michal;
            michal = {};
            entity['channelOpensByChannelId'] = michal;
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'FavoritesSuggestionStore';
    golfie['displayName'] = michal;
    golfie['persistKey'] = michal;
    michal = 9;
    michal = report[michal];
    yankee = oscard.bind(entity)(michal);
    michal = {};
    tangon = function(argFoo) { // Original name: handleFavoriteSuggestionDimissed
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            michal = entity.guildId;
            zuuluu = entity.channelId;
            tangon = _closure1_slot9;
            report = tangon[michal];
            tangon = null;
            if(!(tangon == report)) { _fun00010_ip = 66; continue _fun00009 }
 30:
            report = _closure1_slot9;
            tangon = global;
            tangon = tangon.Set;
            oscard = tangon.prototype;
            oscard = Object.create(oscard, {constructor: {value: tangon}});
            option = oscard;
            tangon = new option[tangon](golfie);
            tangon = tangon instanceof Object ? tangon : oscard;
            report[michal] = tangon;
 66:
            tangon = _closure1_slot9;
            report = tangon[michal];
            tangon = report.add;
            tangon = tangon.bind(report)(zuuluu);
            entity = _closure1_slot8;
            michal = entity[michal];
            entity = michal.delete;
            entity = entity.bind(michal)(zuuluu);
            entity = true;
            return entity;
        }
    };
    michal['DISMISS_FAVORITE_SUGGESTION'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    romeon = tangon;
    offset = michal;
    michal = new romeon[golfie](yankee, offset, verify);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 10;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/opt_in_channels/FavoritesSuggestionStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();