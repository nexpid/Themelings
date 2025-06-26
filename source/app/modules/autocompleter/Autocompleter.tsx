// app/modules/autocompleter/Autocompleter.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
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
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot11;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot11;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
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
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: getAutocompleterBoosterMap
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argBar;
            entity = entity.frecencyBoosters;
            if(entity) { _fun00008_ip = 16; continue _fun00007 }
 12:
            entity = {};
            _fun00008_ip = 55; continue _fun00007;
 16:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.getBoosterMap;
            michal = argFoo;
            entity = zuuluu.bind(tangon)(michal);
 55:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    tangon = global;
    offset = tangon.Object;
    verify = offset.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot6 = golfie;
    golfie = 4;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot7 = golfie;
    golfie = 5;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.AutocompleterResultTypes;
    var _closure1_slot8 = golfie;
    option = tangon.Object;
    golfie = option.freeze;
    tangon = {};
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot9 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo, argBar) { // Original name: Autocompleter
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = arguments[2];
                oscard = arguments[3];
                tangon = this;
                var _closure3_slot0 = tangon;
                entity = undefined;
                if(!(michal === entity)) { _fun00010_ip = 24; continue _fun00009 }
 21:
                michal = 100;
 24:
                if(!(oscard === entity)) { _fun00010_ip = 35; continue _fun00009 }
 28:
                oscard = _closure1_slot9;
 35:
                option = _closure1_slot3;
                golfie = _closure2_slot0;
                golfie = option.bind(entity)(tangon, golfie);
                golfie = '';
                tangon['query'] = golfie;
                report = _closure1_slot9;
                tangon['options'] = report;
                report = new Array(0);
                tangon['results'] = report;
                report = new Array(0);
                tangon['_userResults'] = report;
                report = new Array(0);
                tangon['_groupDMResults'] = report;
                report = new Array(0);
                tangon['_textChannelResults'] = report;
                report = new Array(0);
                tangon['_voiceChannelResults'] = report;
                report = new Array(0);
                tangon['_guildResults'] = report;
                report = new Array(0);
                tangon['_applicationResults'] = report;
                report = new Array(0);
                tangon['_linkResults'] = report;
                report = new Array(0);
                tangon['_inAppNavigations'] = report;
                report = null;
                tangon['_userBlacklist'] = report;
                report = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.results;
                        report = _closure3_slot0;
                        tangon = report._include;
                        michal = _closure1_slot8;
                        michal = michal.USER;
                        michal = tangon.bind(report)(michal);
                        if(!michal) { _fun00012_ip = 302; continue _fun00011 }
 46:
                        tangon = _closure3_slot0;
                        michal = new Array(0);
                        tangon['_userResults'] = michal;
                        michal = _closure1_slot10;
                        golfie = undefined;
                        oscard = michal.bind(golfie)(zuuluu);
                        zuuluu = oscard.bind(golfie)();
                        michal = zuuluu.done;
                        report = 6;
                        tangon = null;
                        if(michal) { _fun00012_ip = 241; continue _fun00011 }
 91:
                        michal = zuuluu.value;
                        offset = michal.id;
                        backup = michal.score;
                        romeon = michal.comparator;
                        verify = _closure1_slot7;
                        michal = verify.getUser;
                        yankee = michal.bind(verify)(offset);
                        if(!(tangon != yankee)) { _fun00012_ip = 223; continue _fun00011 }
 132:
                        michal = _closure3_slot0;
                        offset = michal._userResults;
                        verify = offset.push;
                        michal = {};
                        foxtra = _closure1_slot8;
                        foxtra = foxtra.USER;
                        michal['type'] = foxtra;
                        michal['record'] = yankee;
                        foxtra = _closure1_slot0;
                        yankee = _closure1_slot2;
                        yankee = yankee[report];
                        foxtra = foxtra.bind(golfie)(yankee);
                        yankee = foxtra.calculateScore;
                        yankee = yankee.bind(foxtra)(backup);
                        michal['score'] = yankee;
                        foxtra = tangon != romeon;
                        yankee = undefined;
                        if(!foxtra) { _fun00012_ip = 213; continue _fun00011 }
 210:
                        yankee = romeon;
 213:
                        michal['comparator'] = yankee;
                        michal = verify.bind(offset)(michal);
 223:
                        verify = oscard.bind(golfie)();
                        michal = verify.done;
                        zuuluu = verify;
                        if(!michal) { _fun00012_ip = 91; continue _fun00011 }
 241:
                        michal = _closure3_slot0;
                        zuuluu = michal._userResults;
                        zuuluu = zuuluu.length;
                        michal = michal._limit;
                        if(!(zuuluu > michal)) { _fun00012_ip = 288; continue _fun00011 }
 266:
                        michal = _closure3_slot0;
                        zuuluu = michal._userResults;
                        michal = michal._limit;
                        zuuluu['length'] = michal;
 288:
                        michal = _closure3_slot0;
                        entity = michal.updateAllResults;
                        entity = entity.bind(michal)();
 302:
                        entity = undefined;
                        return entity;
                    }
                };
                tangon['parseUserResults'] = report;
                zuuluu = function() {
                    entity = global;
                    zuuluu = entity.clearTimeout;
                    report = _closure3_slot0;
                    michal = report._asyncTimeout;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    michal = 7;
                    michal = golfie[michal];
                    zuuluu = oscard.bind(entity)(michal);
                    offset = report._userResults;
                    michal = new Array(0);
                    verify = 0;
                    yankee = michal;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._groupDMResults;
                    yankee = michal;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._textChannelResults;
                    yankee = michal;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._voiceChannelResults;
                    yankee = michal;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._guildResults;
                    yankee = michal;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._linkResults;
                    yankee = michal;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._inAppNavigations;
                    yankee = michal;
                    tangon = arraySpread(yankee, offset, verify);
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.uniqBy;
                    michal = function(argFoo) {
                        entity = argFoo;
                        report = entity.type;
                        entity = entity.record;
                        tangon = entity.id;
                        entity = global;
                        entity = entity.HermesInternal;
                        zuuluu = entity.concat;
                        michal = '';
                        entity = '-';
                        entity = zuuluu.bind(michal)(report, entity, tangon);
                        return entity;
                    };
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.sort;
                    michal = 8;
                    michal = golfie[michal];
                    michal = oscard.bind(entity)(michal);
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.value;
                    michal = michal.bind(zuuluu)();
                    report['results'] = michal;
                    tangon = report.onResultsChange;
                    zuuluu = report.results;
                    michal = report.query;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                tangon['updateAllResults'] = zuuluu;
                zuuluu = argFoo;
                tangon['onResultsChange'] = zuuluu;
                report = tangon.setOptions;
                zuuluu = true;
                zuuluu = report.bind(tangon)(oscard, zuuluu);
                tangon['_limit'] = michal;
                michal = tangon.createSearchContext;
                michal = michal.bind(tangon)();
                zuuluu = tangon.setResultTypes;
                michal = argBar;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'createSearchContext';
        entity['key'] = michal;
        michal = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = this;
                zuuluu = michal.userSearchContext;
                entity = null;
                if(!(entity == zuuluu)) { _fun00014_ip = 70; continue _fun00013 }
 15:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 9;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.getSearchContext;
                zuuluu = michal.parseUserResults;
                entity = michal._limit;
                entity = tangon.bind(report)(zuuluu, entity);
                michal['userSearchContext'] = entity;
 70:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(20);
        michal[0] = entity;
        entity = {};
        oscard = 'setLimit';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = argFoo;
                entity = this;
                zuuluu = entity.userSearchContext;
                entity['_limit'] = tangon;
                michal = null;
                if(!(michal != zuuluu)) { _fun00016_ip = 35; continue _fun00015 }
 24:
                michal = zuuluu.setLimit;
                michal = michal.bind(zuuluu)(tangon);
 35:
                michal = entity._userResults;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00016_ip = 74; continue _fun00015 }
 56:
                zuuluu = entity._userResults;
                michal = entity._limit;
                zuuluu['length'] = michal;
 74:
                michal = entity._groupDMResults;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00016_ip = 113; continue _fun00015 }
 95:
                zuuluu = entity._groupDMResults;
                michal = entity._limit;
                zuuluu['length'] = michal;
 113:
                michal = entity._textChannelResults;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00016_ip = 152; continue _fun00015 }
 134:
                zuuluu = entity._textChannelResults;
                michal = entity._limit;
                zuuluu['length'] = michal;
 152:
                michal = entity._voiceChannelResults;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00016_ip = 191; continue _fun00015 }
 173:
                zuuluu = entity._voiceChannelResults;
                michal = entity._limit;
                zuuluu['length'] = michal;
 191:
                michal = entity._guildResults;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00016_ip = 230; continue _fun00015 }
 212:
                zuuluu = entity._guildResults;
                michal = entity._limit;
                zuuluu['length'] = michal;
 230:
                michal = entity._applicationResults;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00016_ip = 269; continue _fun00015 }
 251:
                zuuluu = entity._applicationResults;
                michal = entity._limit;
                zuuluu['length'] = michal;
 269:
                michal = entity._linkResults;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00016_ip = 308; continue _fun00015 }
 290:
                zuuluu = entity._linkResults;
                michal = entity._limit;
                zuuluu['length'] = michal;
 308:
                michal = entity._inAppNavigations;
                zuuluu = michal.length;
                michal = entity._limit;
                if(!(zuuluu > michal)) { _fun00016_ip = 347; continue _fun00015 }
 329:
                michal = entity._inAppNavigations;
                entity = entity._limit;
                michal['length'] = entity;
 347:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'setResultTypes';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = argFoo;
                michal = this;
                entity = null;
                zuuluu = entity != report;
                if(!zuuluu) { _fun00018_ip = 46; continue _fun00017 }
 15:
                zuuluu = global;
                zuuluu = zuuluu.Set;
                tangon = zuuluu.prototype;
                tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                golfie = tangon;
                oscard = report;
                zuuluu = new golfie[zuuluu](oscard, report);
                entity = zuuluu instanceof Object ? zuuluu : tangon;
 46:
                michal['resultTypes'] = entity;
                tangon = michal._include;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.USER;
                zuuluu = tangon.bind(michal)(zuuluu);
                if(zuuluu) { _fun00018_ip = 85; continue _fun00017 }
 79:
                zuuluu = new Array(0);
                _fun00018_ip = 91; continue _fun00017;
 85:
                zuuluu = michal._userResults;
 91:
                michal['_userResults'] = zuuluu;
                tangon = michal._include;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.GROUP_DM;
                zuuluu = tangon.bind(michal)(zuuluu);
                if(zuuluu) { _fun00018_ip = 127; continue _fun00017 }
 121:
                zuuluu = new Array(0);
                _fun00018_ip = 133; continue _fun00017;
 127:
                zuuluu = michal._groupDMResults;
 133:
                michal['_groupDMResults'] = zuuluu;
                tangon = michal._include;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.TEXT_CHANNEL;
                zuuluu = tangon.bind(michal)(zuuluu);
                if(zuuluu) { _fun00018_ip = 169; continue _fun00017 }
 163:
                zuuluu = new Array(0);
                _fun00018_ip = 175; continue _fun00017;
 169:
                zuuluu = michal._textChannelResults;
 175:
                michal['_textChannelResults'] = zuuluu;
                tangon = michal._include;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.VOICE_CHANNEL;
                zuuluu = tangon.bind(michal)(zuuluu);
                if(zuuluu) { _fun00018_ip = 211; continue _fun00017 }
 205:
                zuuluu = new Array(0);
                _fun00018_ip = 217; continue _fun00017;
 211:
                zuuluu = michal._voiceChannelResults;
 217:
                michal['_voiceChannelResults'] = zuuluu;
                tangon = michal._include;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.GUILD;
                zuuluu = tangon.bind(michal)(zuuluu);
                if(zuuluu) { _fun00018_ip = 253; continue _fun00017 }
 247:
                zuuluu = new Array(0);
                _fun00018_ip = 259; continue _fun00017;
 253:
                zuuluu = michal._guildResults;
 259:
                michal['_guildResults'] = zuuluu;
                tangon = michal._include;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.APPLICATION;
                zuuluu = tangon.bind(michal)(zuuluu);
                if(zuuluu) { _fun00018_ip = 295; continue _fun00017 }
 289:
                zuuluu = new Array(0);
                _fun00018_ip = 301; continue _fun00017;
 295:
                zuuluu = michal._applicationResults;
 301:
                michal['_applicationResults'] = zuuluu;
                tangon = michal._include;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.LINK;
                zuuluu = tangon.bind(michal)(zuuluu);
                if(zuuluu) { _fun00018_ip = 337; continue _fun00017 }
 331:
                zuuluu = new Array(0);
                _fun00018_ip = 343; continue _fun00017;
 337:
                zuuluu = michal._linkResults;
 343:
                michal['_linkResults'] = zuuluu;
                zuuluu = michal._include;
                entity = _closure1_slot8;
                entity = entity.IN_APP_NAVIGATION;
                entity = zuuluu.bind(michal)(entity);
                if(entity) { _fun00018_ip = 379; continue _fun00017 }
 373:
                entity = new Array(0);
                _fun00018_ip = 385; continue _fun00017;
 379:
                entity = michal._inAppNavigations;
 385:
                michal['_inAppNavigations'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = '_include';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = this;
                zuuluu = michal.resultTypes;
                entity = null;
                entity = entity == zuuluu;
                if(entity) { _fun00020_ip = 37; continue _fun00019 }
 18:
                tangon = michal.resultTypes;
                zuuluu = tangon.has;
                michal = argFoo;
                entity = zuuluu.bind(tangon)(michal);
 37:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = '_isAsyncSearch';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu._include;
            entity = _closure1_slot8;
            entity = entity.USER;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'setOptions';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                oscard = argFoo;
                report = arguments[1];
                zuuluu = this;
                entity = undefined;
                if(!(report === entity)) { _fun00022_ip = 19; continue _fun00021 }
 17:
                report = false;
 19:
                tangon = oscard;
                if(!report) { _fun00022_ip = 52; continue _fun00021 }
 25:
                report = {};
                option = zuuluu.options;
                verify = report;
                golfie = copyDataProperties(verify, option);
                verify = report;
                option = oscard;
                oscard = copyDataProperties(verify, option);
                tangon = report;
 52:
                zuuluu['options'] = tangon;
                tangon = zuuluu.options;
                report = tangon.blacklist;
                tangon = null;
                if(!(tangon == report)) { _fun00022_ip = 83; continue _fun00021 }
 75:
                zuuluu['_userBlacklist'] = tangon;
                _fun00022_ip = 148; continue _fun00021;
 83:
                tangon = global;
                oscard = tangon.Array;
                report = oscard.from;
                tangon = zuuluu.options;
                tangon = tangon.blacklist;
                oscard = report.bind(oscard)(tangon);
                report = oscard.map;
                tangon = function(argFoo) {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        report = argFoo;
                        entity = report.startsWith;
                        tangon = 'user:';
                        michal = entity.bind(report)(tangon);
                        zuuluu = '';
                        entity = zuuluu;
                        if(!michal) { _fun00024_ip = 41; continue _fun00023 }
 30:
                        michal = report.replace;
                        entity = michal.bind(report)(tangon, zuuluu);
 41:
                        return entity;
                    }
                };
                report = report.bind(oscard)(tangon);
                tangon = report.filter;
                michal = function(argFoo) {
                    michal = '';
                    entity = argFoo;
                    entity = michal !== entity;
                    return entity;
                };
                michal = tangon.bind(report)(michal);
                zuuluu['_userBlacklist'] = michal;
 148:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'search';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                tangon = argFoo;
                michal = this;
                var _closure3_slot0 = michal;
                var _closure3_slot1 = tangon;
                zuuluu = argBar;
                var _closure3_slot2 = zuuluu;
                michal['query'] = tangon;
                zuuluu = tangon.trim;
                tangon = zuuluu.bind(tangon)();
                zuuluu = '';
                if(!(zuuluu !== tangon)) { _fun00026_ip = 142; continue _fun00025 }
 47:
                zuuluu = michal.options;
                zuuluu = zuuluu.frecencyBoosters;
                if(zuuluu) { _fun00026_ip = 81; continue _fun00025 }
 61:
                zuuluu = global;
                tangon = zuuluu.Promise;
                zuuluu = tangon.resolve;
                tangon = zuuluu.bind(tangon)();
                _fun00026_ip = 122; continue _fun00025;
 81:
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 10;
                report = report[zuuluu];
                zuuluu = undefined;
                zuuluu = oscard.bind(zuuluu)(report);
                report = zuuluu.FrecencyUserSettingsActionCreators;
                zuuluu = report.loadIfNecessary;
                tangon = zuuluu.bind(report)();
 122:
                zuuluu = tangon.finally;
                entity = function() {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        zuuluu = _closure3_slot0;
                        oscard = zuuluu.queryUsers;
                        report = _closure3_slot1;
                        tangon = _closure3_slot2;
                        entity = zuuluu._limit;
                        entity = oscard.bind(zuuluu)(report, tangon, entity);
                        tangon = zuuluu.queryGroupDMs;
                        entity = zuuluu._limit;
                        entity = tangon.bind(zuuluu)(report, entity);
                        zuuluu['_groupDMResults'] = entity;
                        tangon = zuuluu.queryTextChannels;
                        entity = zuuluu._limit;
                        entity = tangon.bind(zuuluu)(report, entity);
                        zuuluu['_textChannelResults'] = entity;
                        tangon = zuuluu.queryVoiceChannels;
                        entity = zuuluu._limit;
                        entity = tangon.bind(zuuluu)(report, entity);
                        zuuluu['_voiceChannelResults'] = entity;
                        tangon = zuuluu.queryGuilds;
                        entity = zuuluu._limit;
                        entity = tangon.bind(zuuluu)(report, entity);
                        zuuluu['_guildResults'] = entity;
                        tangon = zuuluu.queryApplications;
                        entity = zuuluu._limit;
                        entity = tangon.bind(zuuluu)(report, entity);
                        zuuluu['_applicationResults'] = entity;
                        tangon = zuuluu.queryInAppNavigations;
                        entity = zuuluu._limit;
                        entity = tangon.bind(zuuluu)(report, entity);
                        zuuluu['_inAppNavigations'] = entity;
                        entity = zuuluu._isAsyncSearch;
                        entity = entity.bind(zuuluu)();
                        if(entity) { _fun00028_ip = 213; continue _fun00027 }
 197:
                        zuuluu = _closure3_slot0;
                        entity = zuuluu.updateAllResults;
                        entity = entity.bind(zuuluu)();
                        _fun00028_ip = 268; continue _fun00027;
 213:
                        entity = global;
                        tangon = entity.clearTimeout;
                        michal = _closure3_slot0;
                        zuuluu = michal._asyncTimeout;
                        report = undefined;
                        zuuluu = tangon.bind(report)(zuuluu);
                        tangon = entity.setTimeout;
                        zuuluu = michal.updateAllResults;
                        entity = 300;
                        entity = tangon.bind(report)(zuuluu, entity);
                        michal['_asyncTimeout'] = entity;
 268:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(entity);
                entity = undefined;
                return entity;
 142:
                entity = michal.clear;
                entity = entity.bind(michal)();
                entity = michal.updateAllResults;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'clear';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                michal = this;
                zuuluu = michal.userSearchContext;
                entity = null;
                if(!(entity != zuuluu)) { _fun00030_ip = 25; continue _fun00029 }
 15:
                entity = zuuluu.clearQuery;
                entity = entity.bind(zuuluu)();
 25:
                entity = new Array(0);
                michal['results'] = entity;
                entity = new Array(0);
                michal['_userResults'] = entity;
                entity = new Array(0);
                michal['_groupDMResults'] = entity;
                entity = new Array(0);
                michal['_textChannelResults'] = entity;
                entity = new Array(0);
                michal['_voiceChannelResults'] = entity;
                entity = new Array(0);
                michal['_guildResults'] = entity;
                entity = new Array(0);
                michal['_applicationResults'] = entity;
                entity = new Array(0);
                michal['_linkResults'] = entity;
                entity = new Array(0);
                michal['_inAppNavigations'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'clean';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            michal = this;
            entity = michal.clear;
            entity = entity.bind(michal)();
            entity = michal.destroy;
            entity = entity.bind(michal)();
            entity = '';
            michal['query'] = entity;
            entity = michal.updateAllResults;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'pause';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                entity = this;
                michal = entity.userSearchContext;
                tangon = null;
                entity = tangon == michal;
                if(entity) { _fun00032_ip = 28; continue _fun00031 }
 18:
                zuuluu = michal.unsubscribe;
                entity = tangon == zuuluu;
 28:
                if(entity) { _fun00032_ip = 41; continue _fun00031 }
 31:
                entity = michal.unsubscribe;
                entity = entity.bind(michal)();
 41:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'resume';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                entity = this;
                michal = entity.userSearchContext;
                tangon = null;
                entity = tangon == michal;
                if(entity) { _fun00034_ip = 28; continue _fun00033 }
 18:
                zuuluu = michal.subscribe;
                entity = tangon == zuuluu;
 28:
                if(entity) { _fun00034_ip = 41; continue _fun00033 }
 31:
                entity = michal.subscribe;
                entity = entity.bind(michal)();
 41:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'destroy';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                michal = this;
                tangon = michal.userSearchContext;
                entity = null;
                if(!(entity != tangon)) { _fun00036_ip = 31; continue _fun00035 }
 15:
                zuuluu = tangon.destroy;
                zuuluu = zuuluu.bind(tangon)();
                michal['userSearchContext'] = entity;
 31:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'queryTextChannels';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                report = this;
                tangon = report._include;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.TEXT_CHANNEL;
                zuuluu = tangon.bind(report)(zuuluu);
                if(zuuluu) { _fun00038_ip = 38; continue _fun00037 }
 32:
                zuuluu = new Array(0);
                return zuuluu;
 38:
                golfie = _closure1_slot12;
                zuuluu = _closure1_slot8;
                oscard = zuuluu.TEXT_CHANNEL;
                tangon = report.options;
                zuuluu = undefined;
                tangon = golfie.bind(zuuluu)(oscard, tangon);
                report = report.options;
                report = report.blacklist;
                var _closure3_slot0 = report;
                oscard = null;
                golfie = oscard != report;
                report = undefined;
                if(!golfie) { _fun00038_ip = 96; continue _fun00037 }
 91:
                report = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.has;
                    entity = argFoo;
                    report = entity.id;
                    entity = global;
                    entity = entity.HermesInternal;
                    tangon = entity.concat;
                    entity = 'channel:';
                    entity = tangon.bind(entity)(report);
                    entity = michal.bind(zuuluu)(entity);
                    entity = !entity;
                    return entity;
                };
 96:
                michal = _closure1_slot1;
                golfie = _closure1_slot2;
                entity = 6;
                entity = golfie[entity];
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.queryChannels;
                entity = {};
                golfie = argFoo;
                entity['query'] = golfie;
                entity['guildId'] = oscard;
                oscard = argBar;
                entity['limit'] = oscard;
                oscard = true;
                entity['fuzzy'] = oscard;
                entity['filter'] = report;
                entity['boosters'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[12] = entity;
        entity = {};
        oscard = 'queryVoiceChannels';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                entity = this;
                zuuluu = entity._include;
                michal = _closure1_slot8;
                michal = michal.VOICE_CHANNEL;
                michal = zuuluu.bind(entity)(michal);
                if(michal) { _fun00040_ip = 36; continue _fun00039 }
 30:
                michal = new Array(0);
                return michal;
 36:
                michal = entity.options;
                oscard = michal.voiceChannelGuildFilter;
                tangon = _closure1_slot12;
                michal = _closure1_slot8;
                michal = michal.VOICE_CHANNEL;
                entity = entity.options;
                zuuluu = undefined;
                tangon = tangon.bind(zuuluu)(michal, entity);
                michal = _closure1_slot1;
                golfie = _closure1_slot2;
                entity = 6;
                entity = golfie[entity];
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.queryChannels;
                entity = {};
                golfie = argFoo;
                entity['query'] = golfie;
                entity['guildId'] = oscard;
                oscard = argBar;
                entity['limit'] = oscard;
                oscard = true;
                entity['fuzzy'] = oscard;
                report = _closure1_slot6;
                entity['type'] = report;
                entity['boosters'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[13] = entity;
        entity = {};
        oscard = 'queryGuilds';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                report = this;
                tangon = report._include;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.GUILD;
                zuuluu = tangon.bind(report)(zuuluu);
                if(zuuluu) { _fun00042_ip = 38; continue _fun00041 }
 32:
                zuuluu = new Array(0);
                return zuuluu;
 38:
                golfie = _closure1_slot12;
                zuuluu = _closure1_slot8;
                oscard = zuuluu.GUILD;
                tangon = report.options;
                zuuluu = undefined;
                tangon = golfie.bind(zuuluu)(oscard, tangon);
                report = report.options;
                oscard = report.blacklist;
                var _closure3_slot0 = oscard;
                report = null;
                oscard = report != oscard;
                report = undefined;
                if(!oscard) { _fun00042_ip = 96; continue _fun00041 }
 91:
                report = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.has;
                    entity = argFoo;
                    report = entity.id;
                    entity = global;
                    entity = entity.HermesInternal;
                    tangon = entity.concat;
                    entity = 'guild:';
                    entity = tangon.bind(entity)(report);
                    entity = michal.bind(zuuluu)(entity);
                    entity = !entity;
                    return entity;
                };
 96:
                michal = _closure1_slot1;
                oscard = _closure1_slot2;
                entity = 6;
                entity = oscard[entity];
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.queryGuilds;
                entity = {};
                oscard = argFoo;
                entity['query'] = oscard;
                oscard = argBar;
                entity['limit'] = oscard;
                oscard = true;
                entity['fuzzy'] = oscard;
                entity['filter'] = report;
                entity['boosters'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[14] = entity;
        entity = {};
        oscard = 'queryUsers';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                oscard = argFoo;
                offset = argBar;
                entity = this;
                report = entity.userSearchContext;
                michal = null;
                if(!(michal != report)) { _fun00044_ip = 168; continue _fun00043 }
 24:
                zuuluu = entity._include;
                michal = _closure1_slot8;
                michal = michal.USER;
                michal = zuuluu.bind(entity)(michal);
                if(!michal) { _fun00044_ip = 168; continue _fun00043 }
 51:
                michal = entity.options;
                tangon = michal.userFilters;
                verify = undefined;
                if(!(verify !== offset)) { _fun00044_ip = 104; continue _fun00043 }
 68:
                zuuluu = _closure1_slot1;
                option = _closure1_slot2;
                michal = 11;
                michal = option[michal];
                option = zuuluu.bind(verify)(michal);
                zuuluu = option.requestMembers;
                michal = 100;
                michal = zuuluu.bind(option)(offset, oscard, michal);
 104:
                zuuluu = report.setLimit;
                michal = argBaz;
                michal = zuuluu.bind(report)(michal);
                zuuluu = report.setQuery;
                romeon = entity._userBlacklist;
                option = _closure1_slot12;
                golfie = _closure1_slot8;
                golfie = golfie.USER;
                entity = entity.options;
                yankee = option.bind(verify)(golfie, entity);
                kiloes = report;
                backup = oscard;
                foxtra = tangon;
                entity = kiloes[zuuluu](backup, foxtra, romeon, yankee, offset);
 168:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[15] = entity;
        entity = {};
        oscard = 'queryGroupDMs';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                zuuluu = this;
                report = zuuluu._include;
                tangon = _closure1_slot8;
                tangon = tangon.GROUP_DM;
                tangon = report.bind(zuuluu)(tangon);
                if(tangon) { _fun00046_ip = 38; continue _fun00045 }
 32:
                tangon = new Array(0);
                return tangon;
 38:
                tangon = zuuluu.options;
                oscard = tangon.blacklist;
                var _closure3_slot0 = oscard;
                golfie = _closure1_slot12;
                tangon = _closure1_slot8;
                report = tangon.GROUP_DM;
                tangon = zuuluu.options;
                zuuluu = undefined;
                tangon = golfie.bind(zuuluu)(report, tangon);
                report = null;
                oscard = report != oscard;
                report = undefined;
                if(!oscard) { _fun00046_ip = 96; continue _fun00045 }
 91:
                report = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.has;
                    entity = argFoo;
                    report = entity.id;
                    entity = global;
                    entity = entity.HermesInternal;
                    tangon = entity.concat;
                    entity = 'channel:';
                    entity = tangon.bind(entity)(report);
                    entity = michal.bind(zuuluu)(entity);
                    entity = !entity;
                    return entity;
                };
 96:
                michal = _closure1_slot1;
                oscard = _closure1_slot2;
                entity = 6;
                entity = oscard[entity];
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.queryGroupDMs;
                entity = {};
                oscard = argFoo;
                entity['query'] = oscard;
                oscard = argBar;
                entity['limit'] = oscard;
                oscard = true;
                entity['fuzzy'] = oscard;
                entity['filter'] = report;
                entity['boosters'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[16] = entity;
        entity = {};
        oscard = 'queryApplications';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                tangon = this;
                zuuluu = tangon._include;
                entity = _closure1_slot8;
                entity = entity.APPLICATION;
                entity = zuuluu.bind(tangon)(entity);
                if(entity) { _fun00048_ip = 36; continue _fun00047 }
 30:
                entity = new Array(0);
                _fun00048_ip = 93; continue _fun00047;
 36:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 6;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.queryApplications;
                michal = {};
                report = argFoo;
                michal['query'] = report;
                report = argBar;
                michal['limit'] = report;
                report = true;
                michal['fuzzy'] = report;
                entity = zuuluu.bind(tangon)(michal);
 93:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[17] = entity;
        entity = {};
        oscard = 'queryLink';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                foxtra = this;
                option = argFoo;
                report = undefined;
                verify = undefined;
                offset = undefined;
                zuuluu = undefined;
                michal = undefined;
                oscard = undefined;
                golfie = undefined;
                entity = undefined;
                romeon = foxtra._include;
                yankee = _closure1_slot8;
                yankee = yankee.LINK;
                yankee = romeon.bind(foxtra)(yankee);
                if(yankee) { _fun00050_ip = 55; continue _fun00049 }
 49:
                yankee = new Array(0);
                return yankee;
 55:
                romeon = _closure1_slot1;
                foxtra = _closure1_slot2;
                yankee = 12;
                yankee = foxtra[yankee];
                romeon = romeon.bind(report)(yankee);
                yankee = romeon.sanitizeUrl;
                offset = yankee.bind(romeon)(option);
 86: // try_start_0
                option = global;
                romeon = option.URL;
                backup = offset;
                yankee = romeon.prototype;
                yankee = Object.create(yankee, {constructor: {value: romeon}});
                kiloes = yankee;
                offset = new kiloes[romeon](backup, foxtra);
                verify = offset instanceof Object ? offset : yankee;
 117: // try_end0
                zuuluu = verify;
                michal = verify.pathname;
                verify = verify.hostname;
                oscard = verify;
                yankee = '';
                if(!(report !== verify)) { _fun00050_ip = 146; continue _fun00049 }
 143:
                yankee = oscard;
 146:
                golfie = zuuluu.host;
                offset = _closure1_slot1;
                verify = _closure1_slot2;
                oscard = 13;
                verify = verify[oscard];
                offset = offset.bind(report)(verify);
                verify = offset.isDiscordHostname;
                verify = verify.bind(offset)(yankee);
                zuuluu = verify;
                if(verify) { _fun00050_ip = 210; continue _fun00049 }
 189:
                option = option.window;
                option = option.location;
                option = option.host;
                zuuluu = option === golfie;
 210:
                entity = zuuluu;
                golfie = michal;
                zuuluu = null;
                if(!(zuuluu !== golfie)) { _fun00050_ip = 259; continue _fun00049 }
 222:
                if(!entity) { _fun00050_ip = 259; continue _fun00049 }
 225:
                zuuluu = _closure1_slot1;
                entity = _closure1_slot2;
                entity = entity[oscard];
                report = zuuluu.bind(report)(entity);
                zuuluu = report.isAppRoute;
                entity = michal;
                entity = zuuluu.bind(report)(entity);
                if(entity) { _fun00050_ip = 265; continue _fun00049 }
 259:
                entity = new Array(0);
                _fun00050_ip = 322; continue _fun00049;
 265:
                zuuluu = {};
                report = _closure1_slot8;
                report = report.LINK;
                zuuluu['type'] = report;
                report = _closure1_slot5;
                tangon = report.fromPath;
                michal = tangon.bind(report)(michal);
                zuuluu['record'] = michal;
                michal = 1;
                zuuluu['score'] = michal;
                michal = new Array(1);
                michal[0] = zuuluu;
                entity = michal;
 322:
                return entity;
 324: // catch_target0
                CatchBlockStart(arg_register=0);
                entity = new Array(0);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[18] = entity;
        entity = {};
        oscard = 'queryInAppNavigations';
        entity['key'] = oscard;
        report = function(argFoo, argBar) { // Original name: value
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                tangon = this;
                zuuluu = tangon._include;
                entity = _closure1_slot8;
                entity = entity.IN_APP_NAVIGATION;
                entity = zuuluu.bind(tangon)(entity);
                if(entity) { _fun00052_ip = 36; continue _fun00051 }
 30:
                entity = new Array(0);
                _fun00052_ip = 93; continue _fun00051;
 36:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 6;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.queryInAppNavigations;
                michal = {};
                report = argFoo;
                michal['query'] = report;
                report = argBar;
                michal['limit'] = report;
                report = true;
                michal['fuzzy'] = report;
                entity = zuuluu.bind(tangon)(michal);
 93:
                return entity;
            }
        };
        entity['value'] = report;
        michal[19] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/autocompleter/Autocompleter.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();