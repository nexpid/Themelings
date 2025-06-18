// app/modules/guilds_bar/native/hooks/useGuildsBarProps.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
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
            verify = _closure1_slot21;
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
            golfie = _closure1_slot21;
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
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
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
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: findGuildSectionIndex
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            sizing = argFoo;
            michal = _closure1_slot20;
            zuuluu = _closure1_slot12;
            entity = zuuluu.getFastListGuildFolders;
            entity = entity.bind(zuuluu)();
            kiloes = undefined;
            backup = michal.bind(kiloes)(entity);
            report = backup.bind(kiloes)();
            entity = report.done;
            offset = -1;
            verify = false;
            yankee = report;
            option = undefined;
            golfie = undefined;
            oscard = undefined;
            report = offset;
            zuuluu = 0;
            michal = false;
            if(entity) { _fun00008_ip = 344; continue _fun00007 }
 70:
            sequen = yankee.value;
            echoed = offset + 1;
            output = sequen.type;
            entity = _closure1_slot13;
            entity = entity.GUILD;
            if(!(output === entity)) { _fun00008_ip = 116; continue _fun00007 }
 97:
            entity = sequen.id;
            report = echoed;
            zuuluu = 0;
            michal = true;
            if(!(entity !== sizing)) { _fun00008_ip = 344; continue _fun00007 }
 116:
            source = sequen.type;
            entity = _closure1_slot13;
            entity = entity.FOLDER;
            result = 0;
            output = verify;
            update = oscard;
            if(!(source === entity)) { _fun00008_ip = 296; continue _fun00007 }
 146:
            source = _closure1_slot20;
            entity = sequen.children;
            source = source.bind(kiloes)(entity);
            ctrled = source.bind(kiloes)();
            entity = ctrled.done;
            cntext = 0;
            record = ctrled;
            result = 0;
            output = verify;
            option = record;
            golfie = source;
            update = oscard;
            if(entity) { _fun00008_ip = 296; continue _fun00007 }
 191:
            entity = record.value;
            papara = entity.type;
            ctrled = _closure1_slot13;
            config = ctrled.GUILD;
            vacuum = cntext;
            ctrled = record;
            target = vacuum;
            if(!(papara === config)) { _fun00008_ip = 236; continue _fun00007 }
 224:
            config = entity.id;
            if(!(config !== sizing)) { _fun00008_ip = 271; continue _fun00007 }
 233:
            target = vacuum + 1;
 236:
            papara = source.bind(kiloes)();
            config = papara.done;
            cntext = target;
            record = papara;
            result = cntext;
            output = verify;
            option = record;
            golfie = source;
            update = entity;
            if(config) { _fun00008_ip = 296; continue _fun00007 }
 269:
            _fun00008_ip = 191; continue _fun00007;
 271:
            sequen = sequen.expanded;
            if(sequen) { _fun00008_ip = 282; continue _fun00007 }
 280:
            vacuum = 0;
 282:
            result = vacuum;
            output = true;
            option = ctrled;
            golfie = source;
            update = entity;
 296:
            report = echoed;
            zuuluu = result;
            michal = output;
            if(michal) { _fun00008_ip = 344; continue _fun00007 }
 308:
            source = backup.bind(kiloes)();
            entity = source.done;
            yankee = source;
            offset = echoed;
            verify = output;
            oscard = update;
            report = offset;
            zuuluu = result;
            michal = verify;
            if(!entity) { _fun00008_ip = 70; continue _fun00007 }
 344:
            entity = null;
            if(!michal) { _fun00008_ip = 376; continue _fun00007 }
 349:
            michal = {};
            tangon = _closure1_slot15;
            tangon = tangon.GUILDS;
            tangon = report + tangon;
            michal['section'] = tangon;
            michal['item'] = zuuluu;
            entity = michal;
 376:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: isAnchorIdEqual
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscard = argBaz;
            entity = null;
            entity = entity != oscard;
            if(!entity) { _fun00010_ip = 50; continue _fun00009 }
 12:
            michal = global;
            michal = michal.HermesInternal;
            report = michal.concat;
            tangon = '';
            zuuluu = argFoo;
            michal = ':';
            zuuluu = report.bind(tangon)(zuuluu, michal, oscard);
            michal = argBar;
            entity = michal === zuuluu;
 50:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    option = 2;
    tangon = oscard[option];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    verify = oscard[tangon];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot12 = verify;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildsNodeType;
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.FastListRenderSections;
    var _closure1_slot15 = golfie;
    golfie = tangon.GUILD_ITEM_SIZE;
    tangon = tangon.GUILD_ITEM_MARGIN;
    var _closure1_slot16 = tangon;
    verify = 12;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot17 = verify;
    verify = {};
    offset = 'section-messages';
    verify['MESSAGES'] = offset;
    offset = 'section-favorites';
    verify['FAVORITES'] = offset;
    offset = 'section-pending-join-requests';
    verify['PENDING_JOIN_REQUESTS'] = offset;
    offset = 'section-lurking-guilds';
    verify['LURKING_GUILDS'] = offset;
    offset = 'section-guest-guilds';
    verify['GUEST_GUILDS'] = offset;
    offset = 'section-private-channels';
    verify['UNREAD_PRIVATE_CHANNELS'] = offset;
    offset = 'section-separator';
    verify['SEPARATOR'] = offset;
    offset = 'section-guilds';
    verify['GUILDS'] = offset;
    var _closure1_slot18 = verify;
    tangon = option * tangon;
    tangon = golfie + tangon;
    var _closure1_slot19 = tangon;
    tangon = 40;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guilds_bar/native/hooks/useGuildsBarProps.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useGuildsBarProps
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 29;
            zuuluu = golfie[zuuluu];
            option = undefined;
            zuuluu = oscard.bind(option)(zuuluu);
            zuuluu = zuuluu.bind(option)();
            vacuum = zuuluu.top;
            var _closure2_slot1 = vacuum;
            zuuluu = zuuluu.bottom;
            var _closure2_slot2 = zuuluu;
            verify = _closure1_slot0;
            report = 30;
            report = golfie[report];
            offset = verify.bind(option)(report);
            report = offset.useMobileQuestDockHeight;
            ctrled = report.bind(offset)();
            var _closure2_slot3 = ctrled;
            romeon = _closure1_slot3;
            yankee = romeon.useEffect;
            offset = new Array(2);
            offset[0] = ctrled;
            offset[1] = vacuum;
            report = function() {
                michal = _closure1_slot14;
                entity = michal.getState;
                entity = entity.bind(michal)();
                zuuluu = entity.listInsets;
                michal = zuuluu.set;
                entity = {};
                report = _closure2_slot1;
                entity['start'] = report;
                tangon = _closure2_slot3;
                entity['end'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            report = yankee.bind(romeon)(report, offset);
            report = 31;
            report = golfie[report];
            report = verify.bind(option)(report);
            yankee = report.IOSInAppEducationExperiment;
            offset = yankee.useExperiment;
            verify = {};
            report = 'Mobile GuildList';
            verify['location'] = report;
            report = {};
            romeon = true;
            report['autoTrackExposure'] = romeon;
            report = offset.bind(yankee)(verify, report);
            verify = report.enabled;
            var _closure2_slot4 = verify;
            report = 32;
            report = golfie[report];
            report = oscard.bind(option)(report);
            report = report.bind(option)();
            result = 0;
            if(!report) { _fun00012_ip = 204; continue _fun00011 }
 201:
            result = 1;
 204:
            var _closure2_slot5 = result;
            romeon = _closure1_slot0;
            update = _closure1_slot2;
            report = 33;
            oscard = update[report];
            foxtra = romeon.bind(option)(oscard);
            yankee = foxtra.useStateFromStoresArray;
            oscard = _closure1_slot10;
            offset = new Array(3);
            offset[0] = oscard;
            oscard = _closure1_slot5;
            offset[1] = oscard;
            oscard = _closure1_slot6;
            offset[2] = oscard;
            golfie = function() {
                michal = _closure1_slot10;
                entity = michal.getUnreadPrivateChannelIds;
                tangon = entity.bind(michal)();
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 34;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.filterOutMessageRequestsAndSpamById;
                oscard = _closure1_slot5;
                entity = new Array(2);
                entity[0] = oscard;
                report = _closure1_slot6;
                entity[1] = report;
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            };
            oscard = new Array(0);
            backup = yankee.bind(foxtra)(offset, golfie, oscard);
            var _closure2_slot6 = backup;
            oscard = update[report];
            foxtra = romeon.bind(option)(oscard);
            yankee = foxtra.useStateFromStoresObject;
            oscard = _closure1_slot9;
            offset = new Array(1);
            offset[0] = oscard;
            golfie = function() {
                entity = {};
                zuuluu = _closure1_slot9;
                michal = zuuluu.getGeoRestrictedGuilds;
                michal = michal.bind(zuuluu)();
                entity['geoRestrictedGuilds'] = michal;
                michal = zuuluu.isLoaded;
                michal = michal.bind(zuuluu)();
                entity['isGuildsLoaded'] = michal;
                return entity;
            };
            golfie = yankee.bind(foxtra)(offset, golfie);
            yankee = golfie.isGuildsLoaded;
            var _closure2_slot7 = yankee;
            foxtra = golfie.geoRestrictedGuilds;
            var _closure2_slot8 = foxtra;
            golfie = update[report];
            sizing = romeon.bind(option)(golfie);
            kiloes = sizing.useStateFromStores;
            golfie = _closure1_slot4;
            offset = new Array(1);
            offset[0] = golfie;
            golfie = function() {
                michal = _closure1_slot4;
                entity = michal.lurkingGuildIds;
                entity = entity.bind(michal)();
                return entity;
            };
            sizing = kiloes.bind(sizing)(offset, golfie);
            var _closure2_slot9 = sizing;
            golfie = update[report];
            kiloes = romeon.bind(option)(golfie);
            offset = kiloes.useStateFromStoresArray;
            golfie = new Array(2);
            golfie[0] = oscard;
            oscard = _closure1_slot8;
            golfie[1] = oscard;
            oscard = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = new Array(0);
                    option = _closure1_slot9;
                    michal = option.getGuilds;
                    oscard = michal.bind(option)();
                    for(michal in oscard)
 29:
                    {
 38:
                        verify = michal;
                        offset = _closure1_slot8;
                        option = offset.isCurrentUserGuest;
                        option = option.bind(offset)(verify);
                        if(!option) { _fun00014_ip = 29; continue _fun00013 }
 59:
                        option = entity.push;
                        option = option.bind(entity)(verify);
                        _fun00014_ip = 29; continue _fun00013;
                    }
 71:
                    return entity;
                }
            };
            kiloes = offset.bind(kiloes)(golfie, oscard);
            var _closure2_slot10 = kiloes;
            oscard = update[report];
            sequen = romeon.bind(option)(oscard);
            source = sequen.useStateFromStores;
            oscard = _closure1_slot12;
            output = new Array(1);
            output[0] = oscard;
            echoed = _closure1_slot1;
            oscard = 35;
            oscard = update[oscard];
            config = echoed.bind(option)(oscard);
            cntext = function() {
                entity = {};
                tangon = _closure1_slot12;
                zuuluu = tangon.getFastListGuildFolders;
                zuuluu = zuuluu.bind(tangon)();
                entity['guildsNFolders'] = zuuluu;
                zuuluu = _closure1_slot12;
                michal = zuuluu.getGuildsTree;
                michal = michal.bind(zuuluu)();
                michal = michal.version;
                entity['version'] = michal;
                return entity;
            };
            record = new Array(0);
            target = sequen;
            papara = output;
            oscard = target[source](papara, cntext, record, config, sequen);
            offset = oscard.guildsNFolders;
            var _closure2_slot11 = offset;
            golfie = oscard.version;
            oscard = 36;
            oscard = update[oscard];
            oscard = echoed.bind(option)(oscard);
            output = oscard.bind(option)();
            oscard = output.expanded;
            var _closure2_slot12 = oscard;
            output = output.pendingFolderNode;
            var _closure2_slot13 = output;
            report = update[report];
            sequen = romeon.bind(option)(report);
            source = sequen.useStateFromStores;
            report = _closure1_slot7;
            romeon = new Array(1);
            romeon[0] = report;
            report = function() {
                entity = _closure1_slot7;
                entity = entity.totalUnavailableGuilds;
                return entity;
            };
            romeon = source.bind(sequen)(romeon, report);
            var _closure2_slot14 = romeon;
            report = _closure1_slot3;
            source = report.useMemo;
            tangon = new Array(3);
            tangon[0] = vacuum;
            tangon[1] = ctrled;
            tangon[2] = zuuluu;
            zuuluu = function() {
                entity = {};
                zuuluu = {};
                report = _closure1_slot16;
                oscard = 3;
                tangon = oscard * report;
                zuuluu['top'] = tangon;
                golfie = _closure2_slot2;
                oscard = oscard * report;
                oscard = golfie + oscard;
                zuuluu['bottom'] = oscard;
                entity['scrollIndicatorInsets'] = zuuluu;
                golfie = _closure2_slot1;
                zuuluu = 2;
                oscard = zuuluu * report;
                oscard = golfie + oscard;
                entity['insetStart'] = oscard;
                tangon = _closure2_slot3;
                zuuluu = zuuluu * report;
                zuuluu = tangon + zuuluu;
                entity['insetEnd'] = zuuluu;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 37;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.getWindowDimensions;
                michal = michal.bind(zuuluu)();
                michal = michal.height;
                entity['chunkBase'] = michal;
                return entity;
            };
            zuuluu = source.bind(report)(zuuluu, tangon);
            var _closure2_slot15 = zuuluu;
            source = report.useCallback;
            ctrled = zuuluu.insetStart;
            tangon = new Array(3);
            tangon[0] = ctrled;
            ctrled = zuuluu.insetEnd;
            tangon[1] = ctrled;
            tangon[2] = michal;
            michal = function(argFoo, argBar) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = argFoo;
                    michal = null;
                    if(!(michal == tangon)) { _fun00016_ip = 47; continue _fun00015 }
 9:
                    entity = _closure2_slot0;
                    oscard = entity.current;
                    if(!(michal != oscard)) { _fun00016_ip = 155; continue _fun00015 }
 28:
                    report = oscard.scrollTo;
                    zuuluu = 0;
                    entity = argBar;
                    entity = report.bind(oscard)(zuuluu, entity);
                    _fun00016_ip = 155; continue _fun00015;
 47:
                    zuuluu = _closure1_slot22;
                    entity = undefined;
                    oscard = zuuluu.bind(entity)(tangon);
                    if(!(michal != oscard)) { _fun00016_ip = 159; continue _fun00015 }
 65:
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.current;
                    if(!(michal != tangon)) { _fun00016_ip = 155; continue _fun00015 }
 81:
                    zuuluu = tangon.scrollToLocation;
                    michal = {};
                    verify = michal;
                    option = oscard;
                    oscard = copyDataProperties(verify, option);
                    golfie = 'visible';
                    oscard = 'orientation';
                    michal[oscard] = golfie;
                    oscard = _closure2_slot15;
                    golfie = oscard.insetStart;
                    oscard = 'paddingStart';
                    michal[oscard] = golfie;
                    report = _closure2_slot15;
                    oscard = report.insetEnd;
                    report = 'paddingEnd';
                    michal[report] = oscard;
                    michal = zuuluu.bind(tangon)(michal);
 155:
                    michal = undefined;
                    return michal;
 159:
                    return entity;
                }
            };
            tangon = source.bind(report)(michal, tangon);
            michal = 38;
            michal = update[michal];
            michal = echoed.bind(option)(michal);
            michal = michal.bind(option)(tangon);
            option = report.useMemo;
            tangon = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = _closure1_slot11;
                    entity = michal.getGuildId;
                    report = entity.bind(michal)();
                    zuuluu = null;
                    oscard = zuuluu != report;
                    entity = undefined;
                    michal = undefined;
                    if(!oscard) { _fun00018_ip = 39; continue _fun00017 }
 30:
                    tangon = _closure1_slot22;
                    michal = tangon.bind(entity)(report);
 39:
                    if(!(zuuluu == michal)) { _fun00018_ip = 45; continue _fun00017 }
 43:
                    return entity;
 45:
                    entity = {};
                    zuuluu = michal.item;
                    entity['initialScrollItem'] = zuuluu;
                    michal = michal.section;
                    entity['initialScrollSection'] = michal;
                    return entity;
                }
            };
            michal = new Array(0);
            option = option.bind(report)(tangon, michal);
            var _closure2_slot16 = option;
            tangon = report.useMemo;
            michal = new Array(13);
            michal[0] = result;
            michal[1] = output;
            michal[2] = sizing;
            michal[3] = kiloes;
            michal[4] = backup;
            michal[5] = foxtra;
            michal[6] = romeon;
            michal[7] = yankee;
            michal[8] = offset;
            michal[9] = verify;
            michal[10] = option;
            michal[11] = golfie;
            michal[12] = oscard;
            entity = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = _closure2_slot5;
                    tangon = [1];
                    tangon[1] = entity;
                    report = _closure2_slot13;
                    entity = null;
                    report = entity == report;
                    golfie = 0;
                    entity = 0;
                    if(report) { _fun00020_ip = 67; continue _fun00019 }
 40:
                    oscard = _closure2_slot12;
                    report = 1;
                    if(!oscard) { _fun00020_ip = 64; continue _fun00019 }
 50:
                    oscard = _closure2_slot13;
                    oscard = oscard.children;
                    report = oscard.length;
 64:
                    entity = report;
 67:
                    tangon[2] = entity;
                    entity = _closure2_slot9;
                    entity = entity.length;
                    tangon[3] = entity;
                    entity = _closure2_slot10;
                    entity = entity.length;
                    tangon[4] = entity;
                    entity = global;
                    option = entity.Math;
                    oscard = option.min;
                    entity = _closure2_slot6;
                    report = entity.length;
                    entity = 10;
                    entity = oscard.bind(option)(report, entity);
                    tangon[5] = entity;
                    offset = 1;
                    tangon[6] = offset;
                    report = _closure1_slot20;
                    entity = _closure2_slot11;
                    option = undefined;
                    oscard = report.bind(option)(entity);
                    report = oscard.bind(option)();
                    entity = report.done;
                    if(entity) { _fun00020_ip = 275; continue _fun00019 }
 169:
                    entity = report.value;
                    romeon = entity.type;
                    yankee = _closure1_slot13;
                    yankee = yankee.GUILD;
                    if(!(romeon !== yankee)) { _fun00020_ip = 250; continue _fun00019 }
 193:
                    romeon = entity.type;
                    yankee = _closure1_slot13;
                    yankee = yankee.FOLDER;
                    if(!(romeon === yankee)) { _fun00020_ip = 260; continue _fun00019 }
 212:
                    romeon = entity.expanded;
                    yankee = tangon.push;
                    if(romeon) { _fun00020_ip = 233; continue _fun00019 }
 226:
                    romeon = yankee.bind(tangon)(offset);
                    _fun00020_ip = 260; continue _fun00019;
 233:
                    entity = entity.children;
                    entity = entity.length;
                    entity = yankee.bind(tangon)(entity);
                    _fun00020_ip = 260; continue _fun00019;
 250:
                    entity = tangon.push;
                    entity = entity.bind(tangon)(offset);
 260:
                    yankee = oscard.bind(option)();
                    entity = yankee.done;
                    report = yankee;
                    if(!entity) { _fun00020_ip = 169; continue _fun00019 }
 275:
                    entity = _closure2_slot8;
                    entity = entity.length;
                    if(!(entity > golfie)) { _fun00020_ip = 307; continue _fun00019 }
 288:
                    report = tangon.push;
                    entity = _closure2_slot8;
                    entity = entity.length;
                    entity = report.bind(tangon)(entity);
 307:
                    oscard = new Array(0);
                    var _closure3_slot0 = oscard;
                    entity = _closure2_slot14;
                    if(!(entity > golfie)) { _fun00020_ip = 339; continue _fun00019 }
 323:
                    report = oscard.push;
                    entity = 'unavailable-guilds';
                    entity = report.bind(oscard)(entity);
 339:
                    entity = _closure2_slot7;
                    if(!entity) { _fun00020_ip = 359; continue _fun00019 }
 346:
                    report = _closure2_slot11;
                    report = report.length;
                    entity = golfie === report;
 359:
                    if(!entity) { _fun00020_ip = 370; continue _fun00019 }
 362:
                    report = _closure2_slot14;
                    entity = golfie === report;
 370:
                    if(!entity) { _fun00020_ip = 389; continue _fun00019 }
 373:
                    report = oscard.push;
                    entity = 'empty-nux';
                    entity = report.bind(oscard)(entity);
 389:
                    report = oscard.push;
                    entity = 'create-join-guild';
                    entity = report.bind(oscard)(entity);
                    report = oscard.push;
                    entity = 'hubs';
                    entity = report.bind(oscard)(entity);
                    entity = _closure2_slot4;
                    if(!entity) { _fun00020_ip = 444; continue _fun00019 }
 428:
                    report = oscard.push;
                    entity = 'app-education';
                    entity = report.bind(oscard)(entity);
 444:
                    entity = {};
                    foxtra = _closure2_slot16;
                    backup = entity;
                    zuuluu = copyDataProperties(backup, foxtra);
                    zuuluu = 'sections';
                    entity[zuuluu] = tangon;
                    tangon = function(argFoo) { // Original name: sectionSize
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            report = argFoo;
                            tangon = _closure2_slot11;
                            zuuluu = _closure2_slot13;
                            entity = _closure1_slot15;
                            entity = entity.PENDING_JOIN_REQUESTS;
                            if(!(report === entity)) { _fun00022_ip = 37; continue _fun00021 }
 31:
                            entity = null;
                            if(!(entity == zuuluu)) { _fun00022_ip = 115; continue _fun00021 }
 37:
                            entity = _closure1_slot15;
                            entity = entity.GUILDS;
                            zuuluu = report >= entity;
                            entity = 0;
                            if(!zuuluu) { _fun00022_ip = 119; continue _fun00021 }
 56:
                            zuuluu = _closure1_slot15;
                            zuuluu = zuuluu.GUILDS;
                            zuuluu = report - zuuluu;
                            tangon = tangon[zuuluu];
                            zuuluu = null;
                            report = zuuluu == tangon;
                            zuuluu = 0;
                            if(report) { _fun00022_ip = 110; continue _fun00021 }
 85:
                            report = tangon.type;
                            tangon = _closure1_slot13;
                            tangon = tangon.FOLDER;
                            zuuluu = 0;
                            if(!(report === tangon)) { _fun00022_ip = 110; continue _fun00021 }
 106:
                            zuuluu = _closure1_slot19;
 110:
                            entity = zuuluu;
                            _fun00022_ip = 119; continue _fun00021;
 115:
                            entity = _closure1_slot19;
 119:
                            return entity;
                        }
                    };
                    zuuluu = 'sectionSize';
                    entity[zuuluu] = tangon;
                    tangon = function(argFoo, argBar) { // Original name: itemSize
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            entity = {};
                            michal = argFoo;
                            entity['section'] = michal;
                            michal = argBar;
                            entity['row'] = michal;
                            zuuluu = _closure2_slot11;
                            entity['guildsNFolders'] = zuuluu;
                            zuuluu = _closure2_slot13;
                            entity['pendingFolderNode'] = zuuluu;
                            zuuluu = _closure2_slot6;
                            entity['privateChannelIds'] = zuuluu;
                            michal = _closure2_slot8;
                            entity['geoRestrictedGuilds'] = michal;
                            yankee = entity.section;
                            oscard = entity.row;
                            golfie = entity.guildsNFolders;
                            tangon = entity.pendingFolderNode;
                            report = entity.privateChannelIds;
                            offset = entity.geoRestrictedGuilds;
                            entity = _closure1_slot15;
                            entity = entity.MESSAGES;
                            if(!(entity !== yankee)) { _fun00024_ip = 486; continue _fun00023 }
 111:
                            entity = _closure1_slot15;
                            entity = entity.FAVORITES;
                            if(!(entity !== yankee)) { _fun00024_ip = 486; continue _fun00023 }
 128:
                            entity = _closure1_slot15;
                            entity = entity.LURKING_GUILDS;
                            if(!(entity !== yankee)) { _fun00024_ip = 486; continue _fun00023 }
 145:
                            entity = _closure1_slot15;
                            entity = entity.GUEST_GUILDS;
                            if(!(entity !== yankee)) { _fun00024_ip = 486; continue _fun00023 }
 162:
                            entity = _closure1_slot15;
                            entity = entity.UNREAD_PRIVATE_CHANNELS;
                            if(!(entity !== yankee)) { _fun00024_ip = 446; continue _fun00023 }
 179:
                            entity = _closure1_slot15;
                            zuuluu = entity.SEPARATOR;
                            entity = 9;
                            if(!(zuuluu !== yankee)) { _fun00024_ip = 490; continue _fun00023 }
 199:
                            zuuluu = _closure1_slot15;
                            zuuluu = zuuluu.PENDING_JOIN_REQUESTS;
                            if(!(zuuluu !== yankee)) { _fun00024_ip = 388; continue _fun00023 }
 216:
                            verify = null;
                            zuuluu = verify == oscard;
                            option = 0;
                            entity = 0;
                            if(zuuluu) { _fun00024_ip = 490; continue _fun00023 }
 232:
                            zuuluu = _closure1_slot15;
                            zuuluu = zuuluu.GUILDS;
                            zuuluu = yankee - zuuluu;
                            yankee = golfie.length;
                            if(!(yankee >= zuuluu)) { _fun00024_ip = 263; continue _fun00023 }
 255:
                            offset = offset[oscard];
                            if(!(verify == offset)) { _fun00024_ip = 382; continue _fun00023 }
 263:
                            golfie = golfie[zuuluu];
                            offset = verify == golfie;
                            zuuluu = 0;
                            if(offset) { _fun00024_ip = 377; continue _fun00023 }
 276:
                            yankee = golfie.type;
                            offset = _closure1_slot13;
                            offset = offset.ROOT;
                            zuuluu = 0;
                            if(!(yankee !== offset)) { _fun00024_ip = 377; continue _fun00023 }
 297:
                            yankee = golfie.type;
                            offset = _closure1_slot13;
                            offset = offset.GUILD;
                            if(!(yankee === offset)) { _fun00024_ip = 325; continue _fun00023 }
 316:
                            offset = oscard > option;
                            zuuluu = 0;
                            if(offset) { _fun00024_ip = 377; continue _fun00023 }
 325:
                            yankee = golfie.type;
                            offset = _closure1_slot13;
                            offset = offset.FOLDER;
                            if(!(yankee === offset)) { _fun00024_ip = 373; continue _fun00023 }
 344:
                            offset = golfie.expanded;
                            zuuluu = 0;
                            if(!offset) { _fun00024_ip = 377; continue _fun00023 }
 355:
                            golfie = golfie.children;
                            golfie = golfie[oscard];
                            golfie = verify == golfie;
                            zuuluu = 0;
                            if(golfie) { _fun00024_ip = 377; continue _fun00023 }
 373:
                            zuuluu = _closure1_slot19;
 377:
                            entity = zuuluu;
                            _fun00024_ip = 490; continue _fun00023;
 382:
                            entity = _closure1_slot19;
                            _fun00024_ip = 490; continue _fun00023;
 388:
                            option = null;
                            verify = option != oscard;
                            zuuluu = 0;
                            if(!verify) { _fun00024_ip = 441; continue _fun00023 }
 399:
                            verify = option != tangon;
                            zuuluu = 0;
                            if(!verify) { _fun00024_ip = 441; continue _fun00023 }
 408:
                            verify = tangon.expanded;
                            zuuluu = 0;
                            if(!verify) { _fun00024_ip = 441; continue _fun00023 }
 419:
                            tangon = tangon.children;
                            tangon = tangon[oscard];
                            tangon = option != tangon;
                            zuuluu = 0;
                            if(!tangon) { _fun00024_ip = 441; continue _fun00023 }
 437:
                            zuuluu = _closure1_slot19;
 441:
                            entity = zuuluu;
                            _fun00024_ip = 490; continue _fun00023;
 446:
                            tangon = null;
                            golfie = tangon != oscard;
                            zuuluu = -1;
                            if(!golfie) { _fun00024_ip = 464; continue _fun00023 }
 461:
                            zuuluu = oscard;
 464:
                            zuuluu = report[zuuluu];
                            tangon = tangon == zuuluu;
                            zuuluu = 0;
                            if(tangon) { _fun00024_ip = 481; continue _fun00023 }
 477:
                            zuuluu = _closure1_slot19;
 481:
                            entity = zuuluu;
                            _fun00024_ip = 490; continue _fun00023;
 486:
                            entity = _closure1_slot19;
 490:
                            return entity;
                        }
                    };
                    zuuluu = 'itemSize';
                    entity[zuuluu] = tangon;
                    tangon = function() { // Original name: footerSize
                        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                            michal = _closure3_slot0;
                            entity = _closure1_slot20;
                            option = undefined;
                            golfie = entity.bind(option)(michal);
                            zuuluu = golfie.bind(option)();
                            entity = zuuluu.done;
                            oscard = 9;
                            report = 'app-education';
                            tangon = zuuluu;
                            zuuluu = 0;
                            michal = 0;
                            if(entity) { _fun00026_ip = 91; continue _fun00025 }
 49:
                            entity = tangon.value;
                            offset = zuuluu;
                            if(!(report === entity)) { _fun00026_ip = 65; continue _fun00025 }
 61:
                            offset = zuuluu + oscard;
 65:
                            entity = _closure1_slot19;
                            zuuluu = offset + entity;
                            yankee = golfie.bind(option)();
                            entity = yankee.done;
                            tangon = yankee;
                            michal = zuuluu;
                            if(!entity) { _fun00026_ip = 49; continue _fun00025 }
 91:
                            entity = 8;
                            entity = michal + entity;
                            return entity;
                        }
                    };
                    zuuluu = 'footerSize';
                    entity[zuuluu] = tangon;
                    tangon = function(argFoo) { // Original name: renderSection
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            report = argFoo;
                            tangon = _closure2_slot11;
                            verify = _closure2_slot13;
                            entity = _closure1_slot15;
                            entity = entity.GUILDS;
                            if(!(!(report >= entity))) { _fun00028_ip = 130; continue _fun00027 }
 31:
                            entity = _closure1_slot15;
                            zuuluu = entity.PENDING_JOIN_REQUESTS;
                            oscard = null;
                            entity = null;
                            if(!(report === zuuluu)) { _fun00028_ip = 251; continue _fun00027 }
 52:
                            zuuluu = oscard != verify;
                            entity = null;
                            if(!zuuluu) { _fun00028_ip = 251; continue _fun00027 }
 64:
                            option = _closure1_slot17;
                            oscard = _closure1_slot1;
                            golfie = _closure1_slot2;
                            zuuluu = 14;
                            zuuluu = golfie[zuuluu];
                            golfie = undefined;
                            oscard = oscard.bind(golfie)(zuuluu);
                            zuuluu = {};
                            offset = verify.id;
                            zuuluu['id'] = offset;
                            offset = verify.expanded;
                            zuuluu['expanded'] = offset;
                            verify = verify.children;
                            zuuluu['childNodes'] = verify;
                            entity = option.bind(golfie)(oscard, zuuluu);
                            _fun00028_ip = 251; continue _fun00027;
 130:
                            zuuluu = _closure1_slot15;
                            zuuluu = zuuluu.GUILDS;
                            zuuluu = report - zuuluu;
                            oscard = tangon[zuuluu];
                            tangon = oscard.type;
                            zuuluu = _closure1_slot13;
                            zuuluu = zuuluu.FOLDER;
                            entity = null;
                            if(!(tangon === zuuluu)) { _fun00028_ip = 251; continue _fun00027 }
 169:
                            report = _closure1_slot17;
                            zuuluu = _closure1_slot1;
                            tangon = _closure1_slot2;
                            michal = 13;
                            michal = tangon[michal];
                            tangon = undefined;
                            zuuluu = zuuluu.bind(tangon)(michal);
                            michal = {};
                            golfie = oscard.id;
                            michal['id'] = golfie;
                            golfie = oscard.expanded;
                            michal['expanded'] = golfie;
                            golfie = oscard.name;
                            michal['name'] = golfie;
                            golfie = oscard.color;
                            michal['color'] = golfie;
                            oscard = oscard.children;
                            michal['childNodes'] = oscard;
                            entity = report.bind(tangon)(zuuluu, michal);
 251:
                            return entity;
                        }
                    };
                    zuuluu = 'renderSection';
                    entity[zuuluu] = tangon;
                    tangon = function(argFoo, argBar) { // Original name: renderItem
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            offset = argFoo;
                            tangon = argBar;
                            verify = _closure2_slot11;
                            oscard = _closure2_slot6;
                            zuuluu = _closure2_slot9;
                            report = _closure2_slot10;
                            option = _closure2_slot8;
                            golfie = _closure2_slot13;
                            entity = _closure1_slot15;
                            entity = entity.MESSAGES;
                            if(!(entity !== offset)) { _fun00030_ip = 778; continue _fun00029 }
 53:
                            entity = _closure1_slot15;
                            entity = entity.FAVORITES;
                            if(!(entity !== offset)) { _fun00030_ip = 742; continue _fun00029 }
 70:
                            entity = _closure1_slot15;
                            entity = entity.LURKING_GUILDS;
                            if(!(entity !== offset)) { _fun00030_ip = 686; continue _fun00029 }
 87:
                            entity = _closure1_slot15;
                            entity = entity.GUEST_GUILDS;
                            if(!(entity !== offset)) { _fun00030_ip = 627; continue _fun00029 }
 104:
                            entity = _closure1_slot15;
                            entity = entity.UNREAD_PRIVATE_CHANNELS;
                            if(!(entity !== offset)) { _fun00030_ip = 568; continue _fun00029 }
 121:
                            entity = _closure1_slot15;
                            entity = entity.SEPARATOR;
                            if(!(entity !== offset)) { _fun00030_ip = 529; continue _fun00029 }
 138:
                            entity = _closure1_slot15;
                            entity = entity.PENDING_JOIN_REQUESTS;
                            if(!(entity !== offset)) { _fun00030_ip = 425; continue _fun00029 }
 155:
                            entity = _closure1_slot15;
                            entity = entity.GUILDS;
                            entity = offset - entity;
                            offset = verify.length;
                            if(!(!(entity >= offset))) { _fun00030_ip = 365; continue _fun00029 }
 181:
                            verify = verify[entity];
                            romeon = null;
                            offset = romeon == verify;
                            entity = null;
                            if(offset) { _fun00030_ip = 360; continue _fun00029 }
 199:
                            yankee = verify.type;
                            offset = _closure1_slot13;
                            offset = offset.ROOT;
                            entity = null;
                            if(!(yankee !== offset)) { _fun00030_ip = 360; continue _fun00029 }
 223:
                            yankee = verify.type;
                            offset = _closure1_slot13;
                            offset = offset.GUILD;
                            if(!(yankee === offset)) { _fun00030_ip = 253; continue _fun00029 }
 242:
                            offset = 0;
                            offset = tangon > offset;
                            entity = null;
                            if(offset) { _fun00030_ip = 360; continue _fun00029 }
 253:
                            yankee = verify.type;
                            offset = _closure1_slot13;
                            offset = offset.FOLDER;
                            backup = verify;
                            if(!(yankee === offset)) { _fun00030_ip = 284; continue _fun00029 }
 275:
                            verify = verify.children;
                            backup = verify[tangon];
 284:
                            offset = romeon == backup;
                            verify = null;
                            if(offset) { _fun00030_ip = 357; continue _fun00029 }
 293:
                            yankee = backup.type;
                            offset = _closure1_slot13;
                            offset = offset.GUILD;
                            verify = null;
                            if(!(yankee === offset)) { _fun00030_ip = 357; continue _fun00029 }
 314:
                            foxtra = _closure1_slot17;
                            yankee = _closure1_slot1;
                            romeon = _closure1_slot2;
                            offset = 17;
                            offset = romeon[offset];
                            romeon = undefined;
                            yankee = yankee.bind(romeon)(offset);
                            offset = {};
                            backup = backup.id;
                            offset['guildId'] = backup;
                            verify = foxtra.bind(romeon)(yankee, offset);
 357:
                            entity = verify;
 360:
                            _fun00030_ip = 812; continue _fun00029;
 365:
                            foxtra = option[tangon];
                            option = null;
                            verify = option != foxtra;
                            if(!verify) { _fun00030_ip = 417; continue _fun00029 }
 378:
                            romeon = _closure1_slot17;
                            offset = _closure1_slot1;
                            yankee = _closure1_slot2;
                            verify = 21;
                            verify = yankee[verify];
                            yankee = undefined;
                            offset = offset.bind(yankee)(verify);
                            verify = {};
                            verify['restrictedGuild'] = foxtra;
                            option = romeon.bind(yankee)(offset, verify);
 417:
                            entity = option;
                            _fun00030_ip = 812; continue _fun00029;
 425:
                            offset = null;
                            option = offset == golfie;
                            entity = null;
                            if(option) { _fun00030_ip = 812; continue _fun00029 }
 439:
                            golfie = golfie.children;
                            romeon = golfie[tangon];
                            option = offset == romeon;
                            golfie = null;
                            if(option) { _fun00030_ip = 521; continue _fun00029 }
 457:
                            verify = romeon.type;
                            option = _closure1_slot13;
                            option = option.GUILD;
                            golfie = null;
                            if(!(verify === option)) { _fun00030_ip = 521; continue _fun00029 }
 478:
                            yankee = _closure1_slot17;
                            verify = _closure1_slot1;
                            offset = _closure1_slot2;
                            option = 20;
                            option = offset[option];
                            offset = undefined;
                            verify = verify.bind(offset)(option);
                            option = {};
                            romeon = romeon.id;
                            option['guildId'] = romeon;
                            golfie = yankee.bind(offset)(verify, option);
 521:
                            entity = golfie;
                            _fun00030_ip = 812; continue _fun00029;
 529:
                            offset = _closure1_slot17;
                            option = _closure1_slot1;
                            verify = _closure1_slot2;
                            golfie = 19;
                            golfie = verify[golfie];
                            verify = undefined;
                            option = option.bind(verify)(golfie);
                            golfie = {};
                            entity = offset.bind(verify)(option, golfie);
                            _fun00030_ip = 812; continue _fun00029;
 568:
                            yankee = oscard[tangon];
                            oscard = null;
                            golfie = oscard == yankee;
                            if(golfie) { _fun00030_ip = 619; continue _fun00029 }
 581:
                            offset = _closure1_slot17;
                            option = _closure1_slot1;
                            verify = _closure1_slot2;
                            golfie = 18;
                            golfie = verify[golfie];
                            verify = undefined;
                            option = option.bind(verify)(golfie);
                            golfie = {};
                            golfie['channelId'] = yankee;
                            oscard = offset.bind(verify)(option, golfie);
 619:
                            entity = oscard;
                            _fun00030_ip = 812; continue _fun00029;
 627:
                            offset = report[tangon];
                            report = null;
                            oscard = report == offset;
                            if(oscard) { _fun00030_ip = 678; continue _fun00029 }
 640:
                            verify = _closure1_slot17;
                            golfie = _closure1_slot1;
                            option = _closure1_slot2;
                            oscard = 17;
                            oscard = option[oscard];
                            option = undefined;
                            golfie = golfie.bind(option)(oscard);
                            oscard = {};
                            oscard['guildId'] = offset;
                            report = verify.bind(option)(golfie, oscard);
 678:
                            entity = report;
                            _fun00030_ip = 812; continue _fun00029;
 686:
                            option = zuuluu[tangon];
                            zuuluu = null;
                            tangon = zuuluu == option;
                            if(tangon) { _fun00030_ip = 737; continue _fun00029 }
 699:
                            golfie = _closure1_slot17;
                            report = _closure1_slot1;
                            oscard = _closure1_slot2;
                            tangon = 17;
                            tangon = oscard[tangon];
                            oscard = undefined;
                            report = report.bind(oscard)(tangon);
                            tangon = {};
                            tangon['guildId'] = option;
                            zuuluu = golfie.bind(oscard)(report, tangon);
 737:
                            entity = zuuluu;
                            _fun00030_ip = 812; continue _fun00029;
 742:
                            oscard = _closure1_slot17;
                            tangon = _closure1_slot1;
                            report = _closure1_slot2;
                            zuuluu = 16;
                            zuuluu = report[zuuluu];
                            report = undefined;
                            tangon = tangon.bind(report)(zuuluu);
                            zuuluu = {};
                            entity = oscard.bind(report)(tangon, zuuluu);
                            _fun00030_ip = 812; continue _fun00029;
 778:
                            report = _closure1_slot17;
                            zuuluu = _closure1_slot1;
                            tangon = _closure1_slot2;
                            michal = 15;
                            michal = tangon[michal];
                            tangon = undefined;
                            zuuluu = zuuluu.bind(tangon)(michal);
                            michal = {};
                            entity = report.bind(tangon)(zuuluu, michal);
 812:
                            return entity;
                        }
                    };
                    zuuluu = 'renderItem';
                    entity[zuuluu] = tangon;
                    tangon = function() { // Original name: renderFooter
                        zuuluu = _closure3_slot0;
                        michal = function(argFoo) { // Original name: renderFooterJSX
                            golfie = argFoo;
                            tangon = _closure1_slot17;
                            michal = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            entity = 22;
                            entity = zuuluu[entity];
                            zuuluu = undefined;
                            michal = michal.bind(zuuluu)(entity);
                            entity = {};
                            oscard = golfie.map;
                            report = function(argFoo) {
                                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                                    report = argFoo;
                                    entity = 'unavailable-guilds';
                                    if(!(entity !== report)) { _fun00032_ip = 223; continue _fun00031 }
 16:
                                    entity = 'empty-nux';
                                    if(!(entity !== report)) { _fun00032_ip = 183; continue _fun00031 }
 29:
                                    entity = 'create-join-guild';
                                    if(!(entity !== report)) { _fun00032_ip = 143; continue _fun00031 }
 39:
                                    entity = 'hubs';
                                    if(!(entity !== report)) { _fun00032_ip = 103; continue _fun00031 }
 49:
                                    entity = 'app-education';
                                    if(!(entity !== report)) { _fun00032_ip = 63; continue _fun00031 }
 59:
                                    entity = undefined;
                                    return entity;
 63:
                                    tangon = _closure1_slot17;
                                    michal = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    entity = 27;
                                    entity = zuuluu[entity];
                                    zuuluu = undefined;
                                    michal = michal.bind(zuuluu)(entity);
                                    entity = {};
                                    entity = tangon.bind(zuuluu)(michal, entity, report);
                                    return entity;
 103:
                                    tangon = _closure1_slot17;
                                    michal = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    entity = 26;
                                    entity = zuuluu[entity];
                                    zuuluu = undefined;
                                    michal = michal.bind(zuuluu)(entity);
                                    entity = {};
                                    entity = tangon.bind(zuuluu)(michal, entity, report);
                                    return entity;
 143:
                                    tangon = _closure1_slot17;
                                    michal = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    entity = 25;
                                    entity = zuuluu[entity];
                                    zuuluu = undefined;
                                    michal = michal.bind(zuuluu)(entity);
                                    entity = {};
                                    entity = tangon.bind(zuuluu)(michal, entity, report);
                                    return entity;
 183:
                                    tangon = _closure1_slot17;
                                    michal = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    entity = 24;
                                    entity = zuuluu[entity];
                                    zuuluu = undefined;
                                    michal = michal.bind(zuuluu)(entity);
                                    entity = {};
                                    entity = tangon.bind(zuuluu)(michal, entity, report);
                                    return entity;
 223:
                                    tangon = _closure1_slot17;
                                    michal = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    entity = 23;
                                    entity = zuuluu[entity];
                                    zuuluu = undefined;
                                    michal = michal.bind(zuuluu)(entity);
                                    entity = {};
                                    entity = tangon.bind(zuuluu)(michal, entity, report);
                                    return entity;
                                }
                            };
                            report = oscard.bind(golfie)(report);
                            entity['children'] = report;
                            entity = tangon.bind(zuuluu)(michal, entity);
                            return entity;
                        };
                        entity = undefined;
                        entity = michal.bind(entity)(zuuluu);
                        return entity;
                    };
                    zuuluu = 'renderFooter';
                    entity[zuuluu] = tangon;
                    tangon = function(argFoo, argBar, argBaz) { // Original name: getRecyclerKey
                        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                            zuuluu = argFoo;
                            tangon = argBar;
                            report = argBaz;
                            golfie = _closure1_slot0;
                            entity = _closure1_slot2;
                            option = 39;
                            michal = entity[option];
                            entity = undefined;
                            michal = golfie.bind(entity)(michal);
                            michal = michal.FastListItemTypes;
                            michal = michal.ITEM;
                            if(!(michal !== zuuluu)) { _fun00034_ip = 85; continue _fun00033 }
 50:
                            golfie = _closure1_slot0;
                            michal = _closure1_slot2;
                            michal = michal[option];
                            michal = golfie.bind(entity)(michal);
                            michal = michal.FastListItemTypes;
                            michal = michal.SECTION;
                            if(!(michal !== zuuluu)) { _fun00034_ip = 85; continue _fun00033 }
 83:
                            return entity;
 85:
                            michal = _closure1_slot15;
                            michal = michal.GUILDS;
                            if(!(!(tangon < michal))) { _fun00034_ip = 271; continue _fun00033 }
 102:
                            zuuluu = _closure2_slot11;
                            michal = _closure1_slot15;
                            michal = michal.GUILDS;
                            michal = tangon - michal;
                            michal = zuuluu[michal];
                            tangon = null;
                            if(!(tangon != michal)) { _fun00034_ip = 271; continue _fun00033 }
 136:
                            golfie = michal.type;
                            zuuluu = _closure1_slot13;
                            zuuluu = zuuluu.ROOT;
                            if(!(golfie !== zuuluu)) { _fun00034_ip = 271; continue _fun00033 }
 155:
                            option = michal.type;
                            zuuluu = _closure1_slot13;
                            golfie = zuuluu.FOLDER;
                            zuuluu = michal;
                            if(!(option === golfie)) { _fun00034_ip = 190; continue _fun00033 }
 177:
                            if(!(tangon != report)) { _fun00034_ip = 242; continue _fun00033 }
 181:
                            golfie = michal.children;
                            zuuluu = golfie[report];
 190:
                            golfie = zuuluu.type;
                            oscard = _closure1_slot13;
                            oscard = oscard.GUILD;
                            if(!(golfie === oscard)) { _fun00034_ip = 213; continue _fun00033 }
 209:
                            if(!(tangon != report)) { _fun00034_ip = 271; continue _fun00033 }
 213:
                            report = zuuluu.id;
                            zuuluu = global;
                            zuuluu = zuuluu.HermesInternal;
                            tangon = zuuluu.concat;
                            zuuluu = '';
                            zuuluu = tangon.bind(zuuluu)(report);
                            return zuuluu;
 242:
                            tangon = michal.id;
                            michal = global;
                            michal = michal.HermesInternal;
                            zuuluu = michal.concat;
                            michal = '';
                            michal = zuuluu.bind(michal)(tangon);
                            return michal;
 271:
                            return entity;
                        }
                    };
                    zuuluu = 'getRecyclerKey';
                    entity[zuuluu] = tangon;
                    tangon = function(argFoo) { // Original name: renderAccessory
                        tangon = _closure1_slot17;
                        michal = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 28;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        michal = michal.bind(zuuluu)(entity);
                        entity = {};
                        report = argFoo;
                        entity['fastList'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
                    zuuluu = 'renderAccessory';
                    entity[zuuluu] = tangon;
                    tangon = function(argFoo, argBar) { // Original name: getAnchorIdFromIndex
                        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                            zuuluu = _closure1_slot14;
                            entity = zuuluu.getState;
                            entity = entity.bind(zuuluu)();
                            entity = entity.dropSpecs;
                            tangon = null;
                            if(!(tangon == entity)) { _fun00036_ip = 53; continue _fun00035 }
 29:
                            zuuluu = _closure1_slot14;
                            entity = zuuluu.getState;
                            entity = entity.bind(zuuluu)();
                            entity = entity.dragSpecs;
                            if(!(tangon != entity)) { _fun00036_ip = 57; continue _fun00035 }
 53:
                            entity = undefined;
                            return entity;
 57:
                            verify = {};
                            entity = argFoo;
                            verify['section'] = entity;
                            entity = argBar;
                            verify['item'] = entity;
                            zuuluu = _closure2_slot9;
                            verify['lurkingGuildsIds'] = zuuluu;
                            zuuluu = _closure2_slot10;
                            verify['guestGuildIds'] = zuuluu;
                            zuuluu = _closure2_slot6;
                            verify['privateChannelIds'] = zuuluu;
                            zuuluu = _closure2_slot11;
                            verify['guildsNFolders'] = zuuluu;
                            zuuluu = _closure2_slot13;
                            verify['pendingFolderNode'] = zuuluu;
                            entity = _closure2_slot8;
                            verify['geoRestrictedGuilds'] = entity;
                            yankee = verify.section;
                            oscard = verify.item;
                            zuuluu = verify.lurkingGuildsIds;
                            golfie = verify.guestGuildIds;
                            option = verify.privateChannelIds;
                            entity = verify.guildsNFolders;
                            report = verify.pendingFolderNode;
                            offset = verify.geoRestrictedGuilds;
                            verify = _closure1_slot15;
                            verify = verify.MESSAGES;
                            if(!(verify !== yankee)) { _fun00036_ip = 784; continue _fun00035 }
 193:
                            verify = _closure1_slot15;
                            verify = verify.FAVORITES;
                            if(!(verify !== yankee)) { _fun00036_ip = 772; continue _fun00035 }
 210:
                            verify = _closure1_slot15;
                            verify = verify.PENDING_JOIN_REQUESTS;
                            if(!(verify !== yankee)) { _fun00036_ip = 672; continue _fun00035 }
 227:
                            verify = _closure1_slot15;
                            verify = verify.LURKING_GUILDS;
                            if(!(verify !== yankee)) { _fun00036_ip = 609; continue _fun00035 }
 244:
                            verify = _closure1_slot15;
                            verify = verify.GUEST_GUILDS;
                            if(!(verify !== yankee)) { _fun00036_ip = 543; continue _fun00035 }
 261:
                            verify = _closure1_slot15;
                            verify = verify.UNREAD_PRIVATE_CHANNELS;
                            if(!(verify !== yankee)) { _fun00036_ip = 477; continue _fun00035 }
 278:
                            verify = _closure1_slot15;
                            verify = verify.SEPARATOR;
                            if(!(verify !== yankee)) { _fun00036_ip = 462; continue _fun00035 }
 295:
                            verify = _closure1_slot15;
                            verify = verify.GUILDS;
                            verify = _closure1_slot15;
                            verify = verify.GUILDS;
                            verify = yankee - verify;
                            yankee = entity[verify];
                            if(!(tangon != yankee)) { _fun00036_ip = 363; continue _fun00035 }
 327:
                            if(!(tangon != oscard)) { _fun00036_ip = 356; continue _fun00035 }
 331:
                            romeon = yankee.children;
                            romeon = romeon[oscard];
                            backup = tangon == romeon;
                            foxtra = undefined;
                            if(backup) { _fun00036_ip = 354; continue _fun00035 }
 349:
                            foxtra = romeon.id;
 354:
                            _fun00036_ip = 361; continue _fun00035;
 356:
                            foxtra = yankee.id;
 361:
                            _fun00036_ip = 410; continue _fun00035;
 363:
                            entity = entity.length;
                            yankee = verify >= entity;
                            entity = undefined;
                            if(!yankee) { _fun00036_ip = 407; continue _fun00035 }
 377:
                            yankee = tangon != oscard;
                            entity = undefined;
                            if(!yankee) { _fun00036_ip = 407; continue _fun00035 }
 386:
                            offset = offset[oscard];
                            yankee = tangon == offset;
                            verify = undefined;
                            if(yankee) { _fun00036_ip = 404; continue _fun00035 }
 399:
                            verify = offset.id;
 404:
                            entity = verify;
 407:
                            foxtra = entity;
 410:
                            verify = tangon != foxtra;
                            entity = undefined;
                            if(!verify) { _fun00036_ip = 457; continue _fun00035 }
 419:
                            verify = _closure1_slot18;
                            romeon = verify.GUILDS;
                            verify = global;
                            verify = verify.HermesInternal;
                            yankee = verify.concat;
                            offset = '';
                            verify = ':';
                            entity = yankee.bind(offset)(romeon, verify, foxtra);
 457:
                            _fun00036_ip = 794; continue _fun00035;
 462:
                            verify = _closure1_slot18;
                            entity = verify.SEPARATOR;
                            _fun00036_ip = 794; continue _fun00035;
 477:
                            if(!(tangon != oscard)) { _fun00036_ip = 525; continue _fun00035 }
 481:
                            verify = _closure1_slot18;
                            romeon = verify.UNREAD_PRIVATE_CHANNELS;
                            yankee = option[oscard];
                            option = global;
                            option = option.HermesInternal;
                            offset = option.concat;
                            verify = '';
                            option = ':';
                            option = offset.bind(verify)(romeon, option, yankee);
                            _fun00036_ip = 535; continue _fun00035;
 525:
                            verify = _closure1_slot18;
                            option = verify.UNREAD_PRIVATE_CHANNELS;
 535:
                            entity = option;
                            _fun00036_ip = 794; continue _fun00035;
 543:
                            if(!(tangon != oscard)) { _fun00036_ip = 591; continue _fun00035 }
 547:
                            option = _closure1_slot18;
                            yankee = option.GUEST_GUILDS;
                            offset = golfie[oscard];
                            golfie = global;
                            golfie = golfie.HermesInternal;
                            verify = golfie.concat;
                            option = '';
                            golfie = ':';
                            golfie = verify.bind(option)(yankee, golfie, offset);
                            _fun00036_ip = 601; continue _fun00035;
 591:
                            option = _closure1_slot18;
                            golfie = option.GUEST_GUILDS;
 601:
                            entity = golfie;
                            _fun00036_ip = 794; continue _fun00035;
 609:
                            if(!(tangon != oscard)) { _fun00036_ip = 657; continue _fun00035 }
 613:
                            golfie = _closure1_slot18;
                            offset = golfie.LURKING_GUILDS;
                            verify = zuuluu[oscard];
                            zuuluu = global;
                            zuuluu = zuuluu.HermesInternal;
                            option = zuuluu.concat;
                            golfie = '';
                            zuuluu = ':';
                            zuuluu = option.bind(golfie)(offset, zuuluu, verify);
                            _fun00036_ip = 667; continue _fun00035;
 657:
                            golfie = _closure1_slot18;
                            zuuluu = golfie.LURKING_GUILDS;
 667:
                            entity = zuuluu;
                            _fun00036_ip = 794; continue _fun00035;
 672:
                            if(!(tangon != oscard)) { _fun00036_ip = 760; continue _fun00035 }
 676:
                            golfie = tangon == report;
                            option = undefined;
                            if(golfie) { _fun00036_ip = 708; continue _fun00035 }
 685:
                            report = report.children;
                            report = report[oscard];
                            oscard = tangon == report;
                            option = undefined;
                            if(oscard) { _fun00036_ip = 708; continue _fun00035 }
 703:
                            option = report.id;
 708:
                            tangon = tangon != option;
                            zuuluu = undefined;
                            if(!tangon) { _fun00036_ip = 755; continue _fun00035 }
 717:
                            tangon = _closure1_slot18;
                            golfie = tangon.PENDING_JOIN_REQUESTS;
                            tangon = global;
                            tangon = tangon.HermesInternal;
                            oscard = tangon.concat;
                            report = '';
                            tangon = ':';
                            zuuluu = oscard.bind(report)(golfie, tangon, option);
 755:
                            entity = zuuluu;
                            _fun00036_ip = 794; continue _fun00035;
 760:
                            zuuluu = _closure1_slot18;
                            entity = zuuluu.PENDING_JOIN_REQUESTS;
                            _fun00036_ip = 794; continue _fun00035;
 772:
                            zuuluu = _closure1_slot18;
                            entity = zuuluu.FAVORITES;
                            _fun00036_ip = 794; continue _fun00035;
 784:
                            michal = _closure1_slot18;
                            entity = michal.MESSAGES;
 794:
                            return entity;
                        }
                    };
                    zuuluu = 'getAnchorIdFromIndex';
                    entity[zuuluu] = tangon;
                    zuuluu = function(argFoo) { // Original name: getAnchorIndexFromId
                        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                            michal = {};
                            entity = argFoo;
                            michal['id'] = entity;
                            zuuluu = _closure2_slot9;
                            michal['lurkingGuildsIds'] = zuuluu;
                            zuuluu = _closure2_slot10;
                            michal['guestGuildIds'] = zuuluu;
                            zuuluu = _closure2_slot6;
                            michal['privateChannelIds'] = zuuluu;
                            zuuluu = _closure2_slot11;
                            michal['guildsNFolders'] = zuuluu;
                            zuuluu = _closure2_slot13;
                            michal['pendingFolderNode'] = zuuluu;
                            entity = _closure2_slot8;
                            michal['geoRestrictedGuilds'] = entity;
                            verify = michal.id;
                            tangon = michal.lurkingGuildsIds;
                            report = michal.guestGuildIds;
                            option = michal.privateChannelIds;
                            golfie = michal.guildsNFolders;
                            entity = michal.pendingFolderNode;
                            oscard = michal.geoRestrictedGuilds;
                            michal = _closure1_slot18;
                            michal = michal.MESSAGES;
                            if(!(michal !== verify)) { _fun00038_ip = 1338; continue _fun00037 }
 127:
                            michal = _closure1_slot18;
                            michal = michal.FAVORITES;
                            if(!(michal !== verify)) { _fun00038_ip = 1317; continue _fun00037 }
 144:
                            michal = _closure1_slot18;
                            michal = michal.PENDING_JOIN_REQUESTS;
                            if(!(michal !== verify)) { _fun00038_ip = 1296; continue _fun00037 }
 161:
                            michal = _closure1_slot18;
                            michal = michal.LURKING_GUILDS;
                            if(!(michal !== verify)) { _fun00038_ip = 1275; continue _fun00037 }
 178:
                            michal = _closure1_slot18;
                            michal = michal.GUEST_GUILDS;
                            if(!(michal !== verify)) { _fun00038_ip = 1254; continue _fun00037 }
 195:
                            michal = _closure1_slot18;
                            michal = michal.UNREAD_PRIVATE_CHANNELS;
                            if(!(michal !== verify)) { _fun00038_ip = 1233; continue _fun00037 }
 212:
                            michal = _closure1_slot18;
                            michal = michal.SEPARATOR;
                            if(!(michal !== verify)) { _fun00038_ip = 1209; continue _fun00037 }
 229:
                            offset = verify.startsWith;
                            michal = _closure1_slot18;
                            michal = michal.LURKING_GUILDS;
                            michal = offset.bind(verify)(michal);
                            if(michal) { _fun00038_ip = 1091; continue _fun00037 }
 256:
                            offset = verify.startsWith;
                            michal = _closure1_slot18;
                            michal = michal.PENDING_JOIN_REQUESTS;
                            michal = offset.bind(verify)(michal);
                            if(!michal) { _fun00038_ip = 413; continue _fun00037 }
 283:
                            michal = null;
                            if(!(michal != entity)) { _fun00038_ip = 413; continue _fun00037 }
 292:
                            michal = _closure1_slot20;
                            entity = entity.children;
                            backup = undefined;
                            foxtra = michal.bind(backup)(entity);
                            michal = foxtra.bind(backup)();
                            entity = michal.done;
                            yankee = 0;
                            romeon = michal;
                            offset = 0;
                            if(entity) { _fun00038_ip = 413; continue _fun00037 }
 327:
                            entity = romeon.value;
                            kiloes = _closure1_slot23;
                            michal = _closure1_slot18;
                            michal = michal.PENDING_JOIN_REQUESTS;
                            entity = entity.id;
                            entity = kiloes.bind(backup)(michal, verify, entity);
                            michal = offset;
                            if(entity) { _fun00038_ip = 384; continue _fun00037 }
 364:
                            offset = michal + 1;
                            kiloes = foxtra.bind(backup)();
                            entity = kiloes.done;
                            romeon = kiloes;
                            if(entity) { _fun00038_ip = 413; continue _fun00037 }
 382:
                            _fun00038_ip = 327; continue _fun00037;
 384:
                            entity = {};
                            offset = _closure1_slot15;
                            offset = offset.PENDING_JOIN_REQUESTS;
                            offset = yankee + offset;
                            entity['section'] = offset;
                            entity['item'] = michal;
                            _fun00038_ip = 1357; continue _fun00037;
 413:
                            offset = verify.startsWith;
                            michal = _closure1_slot18;
                            michal = michal.GUEST_GUILDS;
                            michal = offset.bind(verify)(michal);
                            if(michal) { _fun00038_ip = 973; continue _fun00037 }
 440:
                            offset = verify.startsWith;
                            michal = _closure1_slot18;
                            michal = michal.UNREAD_PRIVATE_CHANNELS;
                            michal = offset.bind(verify)(michal);
                            if(!michal) { _fun00038_ip = 572; continue _fun00037 }
 464:
                            michal = _closure1_slot20;
                            foxtra = undefined;
                            romeon = michal.bind(foxtra)(option);
                            option = romeon.bind(foxtra)();
                            michal = option.done;
                            offset = option;
                            yankee = 0;
                            if(michal) { _fun00038_ip = 572; continue _fun00037 }
 492:
                            backup = offset.value;
                            option = _closure1_slot23;
                            michal = _closure1_slot18;
                            michal = michal.UNREAD_PRIVATE_CHANNELS;
                            michal = option.bind(foxtra)(michal, verify, backup);
                            option = yankee;
                            if(michal) { _fun00038_ip = 544; continue _fun00037 }
 524:
                            yankee = option + 1;
                            backup = romeon.bind(foxtra)();
                            michal = backup.done;
                            offset = backup;
                            if(michal) { _fun00038_ip = 572; continue _fun00037 }
 542:
                            _fun00038_ip = 492; continue _fun00037;
 544:
                            michal = {};
                            offset = _closure1_slot15;
                            offset = offset.UNREAD_PRIVATE_CHANNELS;
                            michal['section'] = offset;
                            michal['item'] = option;
                            entity = michal;
                            _fun00038_ip = 1357; continue _fun00037;
 572:
                            option = verify.startsWith;
                            michal = _closure1_slot18;
                            michal = michal.GUILDS;
                            michal = option.bind(verify)(michal);
                            romeon = undefined;
                            entity = undefined;
                            if(!michal) { _fun00038_ip = 1357; continue _fun00037 }
 603:
                            michal = _closure1_slot20;
                            backup = michal.bind(romeon)(golfie);
                            golfie = backup.bind(romeon)();
                            michal = golfie.done;
                            foxtra = golfie;
                            golfie = 0;
                            option = 0;
                            if(michal) { _fun00038_ip = 848; continue _fun00037 }
 634:
                            michal = foxtra.value;
                            sizing = _closure1_slot23;
                            offset = _closure1_slot18;
                            kiloes = offset.GUILDS;
                            offset = michal.id;
                            kiloes = sizing.bind(romeon)(kiloes, verify, offset);
                            offset = golfie;
                            if(kiloes) { _fun00038_ip = 820; continue _fun00037 }
 674:
                            kiloes = _closure1_slot20;
                            michal = michal.children;
                            result = kiloes.bind(romeon)(michal);
                            kiloes = result.bind(romeon)();
                            michal = kiloes.done;
                            output = 0;
                            sizing = kiloes;
                            if(michal) { _fun00038_ip = 794; continue _fun00037 }
 705:
                            michal = sizing.value;
                            echoed = _closure1_slot23;
                            kiloes = _closure1_slot18;
                            kiloes = kiloes.GUILDS;
                            michal = michal.id;
                            michal = echoed.bind(romeon)(kiloes, verify, michal);
                            kiloes = output;
                            if(michal) { _fun00038_ip = 762; continue _fun00037 }
 742:
                            output = kiloes + 1;
                            echoed = result.bind(romeon)();
                            michal = echoed.done;
                            sizing = echoed;
                            if(michal) { _fun00038_ip = 794; continue _fun00037 }
 760:
                            _fun00038_ip = 705; continue _fun00037;
 762:
                            michal = {};
                            sizing = _closure1_slot15;
                            sizing = sizing.GUILDS;
                            sizing = offset + sizing;
                            michal['section'] = sizing;
                            michal['item'] = kiloes;
                            entity = michal;
                            _fun00038_ip = 1357; continue _fun00037;
 794:
                            golfie = offset + 1;
                            sizing = backup.bind(romeon)();
                            michal = sizing.done;
                            foxtra = sizing;
                            option = golfie;
                            if(michal) { _fun00038_ip = 848; continue _fun00037 }
 815:
                            _fun00038_ip = 634; continue _fun00037;
 820:
                            michal = {};
                            golfie = _closure1_slot15;
                            golfie = golfie.GUILDS;
                            golfie = offset + golfie;
                            michal['section'] = golfie;
                            entity = michal;
                            _fun00038_ip = 1357; continue _fun00037;
 848:
                            michal = _closure1_slot20;
                            offset = michal.bind(romeon)(oscard);
                            oscard = offset.bind(romeon)();
                            michal = oscard.done;
                            yankee = 0;
                            golfie = oscard;
                            entity = undefined;
                            if(michal) { _fun00038_ip = 1357; continue _fun00037 }
 879:
                            michal = golfie.value;
                            foxtra = _closure1_slot23;
                            oscard = _closure1_slot18;
                            oscard = oscard.GUILDS;
                            michal = michal.id;
                            michal = foxtra.bind(romeon)(oscard, verify, michal);
                            oscard = yankee;
                            if(michal) { _fun00038_ip = 941; continue _fun00037 }
 916:
                            yankee = oscard + 1;
                            foxtra = offset.bind(romeon)();
                            michal = foxtra.done;
                            golfie = foxtra;
                            entity = undefined;
                            if(michal) { _fun00038_ip = 1357; continue _fun00037 }
 939:
                            _fun00038_ip = 879; continue _fun00037;
 941:
                            michal = {};
                            golfie = _closure1_slot15;
                            golfie = golfie.GUILDS;
                            golfie = option + golfie;
                            michal['section'] = golfie;
                            michal['item'] = oscard;
                            entity = michal;
                            _fun00038_ip = 1357; continue _fun00037;
 973:
                            michal = _closure1_slot20;
                            offset = undefined;
                            option = michal.bind(offset)(report);
                            report = option.bind(offset)();
                            michal = report.done;
                            oscard = report;
                            golfie = 0;
                            entity = undefined;
                            if(michal) { _fun00038_ip = 1357; continue _fun00037 }
 1006:
                            yankee = oscard.value;
                            report = _closure1_slot23;
                            michal = _closure1_slot18;
                            michal = michal.GUEST_GUILDS;
                            michal = report.bind(offset)(michal, verify, yankee);
                            report = golfie;
                            if(michal) { _fun00038_ip = 1063; continue _fun00037 }
 1038:
                            golfie = report + 1;
                            yankee = option.bind(offset)();
                            michal = yankee.done;
                            oscard = yankee;
                            entity = undefined;
                            if(michal) { _fun00038_ip = 1357; continue _fun00037 }
 1061:
                            _fun00038_ip = 1006; continue _fun00037;
 1063:
                            michal = {};
                            oscard = _closure1_slot15;
                            oscard = oscard.GUEST_GUILDS;
                            michal['section'] = oscard;
                            michal['item'] = report;
                            entity = michal;
                            _fun00038_ip = 1357; continue _fun00037;
 1091:
                            michal = _closure1_slot20;
                            option = undefined;
                            golfie = michal.bind(option)(tangon);
                            tangon = golfie.bind(option)();
                            michal = tangon.done;
                            report = tangon;
                            oscard = 0;
                            entity = undefined;
                            if(michal) { _fun00038_ip = 1357; continue _fun00037 }
 1124:
                            offset = report.value;
                            tangon = _closure1_slot23;
                            michal = _closure1_slot18;
                            michal = michal.LURKING_GUILDS;
                            michal = tangon.bind(option)(michal, verify, offset);
                            tangon = oscard;
                            if(michal) { _fun00038_ip = 1181; continue _fun00037 }
 1156:
                            oscard = tangon + 1;
                            offset = golfie.bind(option)();
                            michal = offset.done;
                            report = offset;
                            entity = undefined;
                            if(michal) { _fun00038_ip = 1357; continue _fun00037 }
 1179:
                            _fun00038_ip = 1124; continue _fun00037;
 1181:
                            michal = {};
                            report = _closure1_slot15;
                            report = report.LURKING_GUILDS;
                            michal['section'] = report;
                            michal['item'] = tangon;
                            entity = michal;
                            _fun00038_ip = 1357; continue _fun00037;
 1209:
                            michal = {};
                            tangon = _closure1_slot15;
                            tangon = tangon.SEPARATOR;
                            michal['section'] = tangon;
                            entity = michal;
                            _fun00038_ip = 1357; continue _fun00037;
 1233:
                            michal = {};
                            tangon = _closure1_slot15;
                            tangon = tangon.UNREAD_PRIVATE_CHANNELS;
                            michal['section'] = tangon;
                            entity = michal;
                            _fun00038_ip = 1357; continue _fun00037;
 1254:
                            michal = {};
                            tangon = _closure1_slot15;
                            tangon = tangon.GUEST_GUILDS;
                            michal['section'] = tangon;
                            entity = michal;
                            _fun00038_ip = 1357; continue _fun00037;
 1275:
                            michal = {};
                            tangon = _closure1_slot15;
                            tangon = tangon.LURKING_GUILDS;
                            michal['section'] = tangon;
                            entity = michal;
                            _fun00038_ip = 1357; continue _fun00037;
 1296:
                            michal = {};
                            tangon = _closure1_slot15;
                            tangon = tangon.PENDING_JOIN_REQUESTS;
                            michal['section'] = tangon;
                            entity = michal;
                            _fun00038_ip = 1357; continue _fun00037;
 1317:
                            michal = {};
                            tangon = _closure1_slot15;
                            tangon = tangon.FAVORITES;
                            michal['section'] = tangon;
                            entity = michal;
                            _fun00038_ip = 1357; continue _fun00037;
 1338:
                            michal = {};
                            zuuluu = _closure1_slot15;
                            zuuluu = zuuluu.MESSAGES;
                            michal['section'] = zuuluu;
                            entity = michal;
 1357:
                            return entity;
                        }
                    };
                    michal = 'getAnchorIndexFromId';
                    entity[michal] = zuuluu;
                    return entity;
                }
            };
            michal = tangon.bind(report)(entity, michal);
            entity = {};
            entity['listProps'] = zuuluu;
            entity['listDataProps'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();