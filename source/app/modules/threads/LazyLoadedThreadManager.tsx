// app/modules/threads/LazyLoadedThreadManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    tangon = function(argFoo) { // Original name: loadThread
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            tangon = null;
            if(!(tangon != report)) { _fun00002_ip = 502; continue _fun00001 }
 18:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 7;
            michal = golfie[michal];
            golfie = undefined;
            michal = oscard.bind(golfie)(michal);
            michal = michal.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
            if(!(report !== michal)) { _fun00002_ip = 482; continue _fun00001 }
 56:
            michal = _closure1_slot10;
            michal = michal.bind(golfie)(report);
            if(michal) { _fun00002_ip = 462; continue _fun00001 }
 71:
            oscard = _closure1_slot6;
            michal = oscard.getChannel;
            michal = michal.bind(oscard)(report);
            if(!(tangon == michal)) { _fun00002_ip = 442; continue _fun00001 }
 92:
            michal = function() { // Original name: initialize
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure1_slot12;
                    if(michal) { _fun00004_ip = 61; continue _fun00003 }
 10:
                    michal = true;
                    _closure1_slot12 = michal;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.subscribe;
                    michal = 'CONNECTION_OPEN';
                    entity = function() {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            michal = {};
                            _closure1_slot11 = michal;
                            zuuluu = _closure1_slot7;
                            michal = zuuluu.getChannelId;
                            zuuluu = michal.bind(zuuluu)();
                            tangon = _closure1_slot6;
                            michal = tangon.getChannel;
                            report = michal.bind(tangon)(zuuluu);
                            tangon = null;
                            michal = tangon != zuuluu;
                            if(!michal) { _fun00006_ip = 50; continue _fun00005 }
 46:
                            michal = tangon == report;
 50:
                            if(!michal) { _fun00006_ip = 64; continue _fun00005 }
 53:
                            michal = _closure1_slot13;
                            entity = undefined;
                            entity = michal.bind(entity)(zuuluu);
 64:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(michal, entity);
 61:
                    entity = undefined;
                    return entity;
                }
            };
            michal = michal.bind(golfie)();
            oscard = _closure1_slot3;
            michal = oscard.isConnected;
            michal = michal.bind(oscard)();
            if(michal) { _fun00002_ip = 138; continue _fun00001 }
 118:
            michal = global;
            oscard = michal.Promise;
            michal = oscard.resolve;
            michal = michal.bind(oscard)();
            return michal;
 138:
            michal = _closure1_slot11;
            michal = michal[report];
            if(!(tangon == michal)) { _fun00002_ip = 401; continue _fun00001 }
 153:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 8;
            tangon = option[tangon];
            yankee = oscard.bind(golfie)(tangon);
            offset = yankee.matchPath;
            tangon = global;
            tangon = tangon.location;
            verify = tangon.pathname;
            tangon = {};
            sizing = _closure1_slot9;
            kiloes = sizing.CHANNEL;
            romeon = 9;
            foxtra = option[romeon];
            foxtra = oscard.bind(golfie)(foxtra);
            backup = foxtra.RouteParam;
            foxtra = backup.guildId;
            backup = foxtra.bind(backup)();
            romeon = option[romeon];
            romeon = oscard.bind(golfie)(romeon);
            foxtra = romeon.RouteParam;
            romeon = foxtra.channelId;
            foxtra = romeon.bind(foxtra)();
            romeon = ':messageId';
            romeon = kiloes.bind(sizing)(backup, foxtra, romeon);
            tangon['path'] = romeon;
            romeon = true;
            tangon['exact'] = romeon;
            tangon = offset.bind(yankee)(verify, tangon);
            var _closure2_slot1 = tangon;
            tangon = 10;
            tangon = option[tangon];
            tangon = oscard.bind(golfie)(tangon);
            golfie = tangon.HTTP;
            oscard = golfie.get;
            tangon = {};
            verify = _closure1_slot8;
            option = verify.CHANNEL;
            option = option.bind(verify)(report);
            tangon['url'] = option;
            option = false;
            tangon['rejectWithError'] = option;
            golfie = oscard.bind(golfie)(tangon);
            oscard = golfie.then;
            tangon = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.body;
                    zuuluu = _closure1_slot11;
                    michal = _closure2_slot0;
                    entity = {};
                    golfie = 'LOADED';
                    entity['type'] = golfie;
                    zuuluu[michal] = entity;
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.has;
                    entity = oscard.type;
                    entity = michal.bind(zuuluu)(entity);
                    if(!entity) { _fun00008_ip = 156; continue _fun00007 }
 58:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 6;
                    entity = zuuluu[entity];
                    golfie = undefined;
                    zuuluu = michal.bind(golfie)(entity);
                    michal = zuuluu.dispatch;
                    entity = {};
                    option = 'THREAD_CREATE';
                    entity['type'] = option;
                    tangon = _closure1_slot4;
                    tangon = tangon.bind(golfie)(oscard);
                    entity['channel'] = tangon;
                    tangon = _closure2_slot1;
                    oscard = null;
                    option = oscard == tangon;
                    tangon = undefined;
                    if(option) { _fun00008_ip = 147; continue _fun00007 }
 123:
                    report = _closure2_slot1;
                    report = report.params;
                    oscard = oscard == report;
                    tangon = undefined;
                    if(oscard) { _fun00008_ip = 147; continue _fun00007 }
 142:
                    tangon = report.messageId;
 147:
                    entity['messageId'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 156:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = oscard.bind(golfie)(tangon);
            tangon = oscard.catch;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot11;
                    oscard = _closure2_slot0;
                    michal = {};
                    tangon = 'NOT_FOUND';
                    michal['type'] = tangon;
                    zuuluu[oscard] = michal;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'CHANNEL_DELETE';
                    michal['type'] = report;
                    report = {};
                    report['id'] = oscard;
                    oscard = _closure2_slot1;
                    option = null;
                    verify = option == oscard;
                    oscard = undefined;
                    if(verify) { _fun00010_ip = 110; continue _fun00009 }
 86:
                    golfie = _closure2_slot1;
                    golfie = golfie.params;
                    option = option == golfie;
                    oscard = undefined;
                    if(option) { _fun00010_ip = 110; continue _fun00009 }
 105:
                    oscard = golfie.guildId;
 110:
                    report['guild_id'] = oscard;
                    report['parent_id'] = entity;
                    michal['channel'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            entity = tangon.bind(oscard)(entity);
            tangon = _closure1_slot11;
            zuuluu = {};
            oscard = 'LOADING';
            zuuluu['type'] = oscard;
            zuuluu['promise'] = entity;
            tangon[report] = zuuluu;
            return entity;
 401:
            zuuluu = michal.type;
            entity = 'LOADING';
            if(!(entity !== zuuluu)) { _fun00002_ip = 434; continue _fun00001 }
 414:
            entity = global;
            zuuluu = entity.Promise;
            entity = zuuluu.resolve;
            entity = entity.bind(zuuluu)();
            _fun00002_ip = 440; continue _fun00001;
 434:
            entity = michal.promise;
 440:
            return entity;
 442:
            entity = global;
            michal = entity.Promise;
            entity = michal.resolve;
            entity = entity.bind(michal)();
            return entity;
 462:
            entity = global;
            michal = entity.Promise;
            entity = michal.resolve;
            entity = entity.bind(michal)();
            return entity;
 482:
            entity = global;
            michal = entity.Promise;
            entity = michal.resolve;
            entity = entity.bind(michal)();
            return entity;
 502:
            entity = global;
            michal = entity.Promise;
            entity = michal.resolve;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    verify = michal.createChannelRecordFromServer;
    var _closure1_slot4 = verify;
    michal = michal.THREAD_CHANNEL_TYPES;
    var _closure1_slot5 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.Endpoints;
    var _closure1_slot8 = option;
    michal = michal.Routes;
    var _closure1_slot9 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.isStaticChannelRoute;
    var _closure1_slot10 = michal;
    michal = {};
    var _closure1_slot11 = michal;
    michal = false;
    var _closure1_slot12 = michal;
    michal = {};
    michal['loadThread'] = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/threads/LazyLoadedThreadManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();