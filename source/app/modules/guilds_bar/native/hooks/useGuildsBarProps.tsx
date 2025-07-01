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
            verify = _closure1_slot23;
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
            golfie = _closure1_slot23;
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
    var _closure1_slot22 = entity;
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
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: findGuildSectionIndex
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            sizing = argFoo;
            michal = _closure1_slot22;
            zuuluu = _closure1_slot14;
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
            entity = _closure1_slot15;
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
            entity = _closure1_slot15;
            entity = entity.FOLDER;
            result = 0;
            output = verify;
            update = oscard;
            if(!(source === entity)) { _fun00008_ip = 296; continue _fun00007 }
 146:
            source = _closure1_slot22;
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
            ctrled = _closure1_slot15;
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
            tangon = _closure1_slot17;
            tangon = tangon.GUILDS;
            tangon = report + tangon;
            michal['section'] = tangon;
            michal['item'] = zuuluu;
            entity = michal;
 376:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
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
    var _closure1_slot25 = entity;
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
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 11;
    verify = oscard[tangon];
    verify = golfie.bind(entity)(verify);
    var _closure1_slot14 = verify;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildsNodeType;
    var _closure1_slot15 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot16 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.FastListRenderSections;
    var _closure1_slot17 = golfie;
    golfie = tangon.GUILD_ITEM_SIZE;
    tangon = tangon.GUILD_ITEM_MARGIN;
    var _closure1_slot18 = tangon;
    verify = 14;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot19 = verify;
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
    var _closure1_slot20 = verify;
    tangon = option * tangon;
    tangon = golfie + tangon;
    var _closure1_slot21 = tangon;
    tangon = 42;
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
            zuuluu = 31;
            zuuluu = golfie[zuuluu];
            option = undefined;
            zuuluu = oscard.bind(option)(zuuluu);
            zuuluu = zuuluu.bind(option)();
            vacuum = zuuluu.top;
            var _closure2_slot1 = vacuum;
            zuuluu = zuuluu.bottom;
            var _closure2_slot2 = zuuluu;
            verify = _closure1_slot0;
            report = 32;
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
                michal = _closure1_slot16;
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
            report = 33;
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
            report = 34;
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
            report = 35;
            oscard = update[report];
            foxtra = romeon.bind(option)(oscard);
            yankee = foxtra.useStateFromStoresArray;
            oscard = _closure1_slot12;
            offset = new Array(3);
            offset[0] = oscard;
            oscard = _closure1_slot6;
            offset[1] = oscard;
            oscard = _closure1_slot7;
            offset[2] = oscard;
            golfie = function() {
                michal = _closure1_slot12;
                entity = michal.getUnreadPrivateChannelIds;
                tangon = entity.bind(michal)();
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 36;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.filterOutMessageRequestsAndSpamById;
                oscard = _closure1_slot6;
                entity = new Array(2);
                entity[0] = oscard;
                report = _closure1_slot7;
                entity[1] = report;
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            };
            oscard = new Array(0);
            backup = yankee.bind(foxtra)(offset, golfie, oscard);
            var _closure2_slot6 = backup;
            oscard = update[report];
            yankee = romeon.bind(option)(oscard);
            offset = yankee.useStateFromStores;
            oscard = _closure1_slot4;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                michal = _closure1_slot4;
                entity = michal.isConnected;
                entity = entity.bind(michal)();
                return entity;
            };
            yankee = offset.bind(yankee)(golfie, oscard);
            var _closure2_slot7 = yankee;
            oscard = update[report];
            foxtra = romeon.bind(option)(oscard);
            offset = foxtra.useStateFromStoresArray;
            oscard = _closure1_slot8;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                michal = _closure1_slot8;
                entity = michal.getGeoRestrictedGuilds;
                entity = entity.bind(michal)();
                return entity;
            };
            foxtra = offset.bind(foxtra)(golfie, oscard);
            var _closure2_slot8 = foxtra;
            oscard = update[report];
            kiloes = romeon.bind(option)(oscard);
            offset = kiloes.useStateFromStores;
            oscard = _closure1_slot5;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                michal = _closure1_slot5;
                entity = michal.lurkingGuildIds;
                entity = entity.bind(michal)();
                return entity;
            };
            sizing = offset.bind(kiloes)(golfie, oscard);
            var _closure2_slot9 = sizing;
            oscard = update[report];
            kiloes = romeon.bind(option)(oscard);
            offset = kiloes.useStateFromStoresArray;
            oscard = _closure1_slot11;
            golfie = new Array(2);
            golfie[0] = oscard;
            oscard = _closure1_slot10;
            golfie[1] = oscard;
            oscard = function() {
                michal = _closure1_slot11;
                entity = michal.getGuildIds;
                zuuluu = entity.bind(michal)();
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    zuuluu = _closure1_slot10;
                    michal = zuuluu.isCurrentUserGuest;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            kiloes = offset.bind(kiloes)(golfie, oscard);
            var _closure2_slot10 = kiloes;
            oscard = update[report];
            sequen = romeon.bind(option)(oscard);
            source = sequen.useStateFromStores;
            oscard = _closure1_slot14;
            output = new Array(1);
            output[0] = oscard;
            echoed = _closure1_slot1;
            oscard = 37;
            oscard = update[oscard];
            config = echoed.bind(option)(oscard);
            cntext = function() {
                entity = {};
                tangon = _closure1_slot14;
                zuuluu = tangon.getFastListGuildFolders;
                zuuluu = zuuluu.bind(tangon)();
                entity['guildsNFolders'] = zuuluu;
                zuuluu = _closure1_slot14;
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
            oscard = 38;
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
            report = _closure1_slot9;
            romeon = new Array(1);
            romeon[0] = report;
            report = function() {
                entity = _closure1_slot9;
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
                report = _closure1_slot18;
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
                michal = 39;
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
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = argFoo;
                    michal = null;
                    if(!(michal == tangon)) { _fun00014_ip = 47; continue _fun00013 }
 9:
                    entity = _closure2_slot0;
                    oscard = entity.current;
                    if(!(michal != oscard)) { _fun00014_ip = 155; continue _fun00013 }
 28:
                    report = oscard.scrollTo;
                    zuuluu = 0;
                    entity = argBar;
                    entity = report.bind(oscard)(zuuluu, entity);
                    _fun00014_ip = 155; continue _fun00013;
 47:
                    zuuluu = _closure1_slot24;
                    entity = undefined;
                    oscard = zuuluu.bind(entity)(tangon);
                    if(!(michal != oscard)) { _fun00014_ip = 159; continue _fun00013 }
 65:
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.current;
                    if(!(michal != tangon)) { _fun00014_ip = 155; continue _fun00013 }
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
            michal = 40;
            michal = update[michal];
            michal = echoed.bind(option)(michal);
            michal = michal.bind(option)(tangon);
            option = report.useMemo;
            tangon = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure1_slot13;
                    entity = michal.getGuildId;
                    report = entity.bind(michal)();
                    zuuluu = null;
                    oscard = zuuluu != report;
                    entity = undefined;
                    michal = undefined;
                    if(!oscard) { _fun00016_ip = 39; continue _fun00015 }
 30:
                    tangon = _closure1_slot24;
                    michal = tangon.bind(entity)(report);
 39:
                    if(!(zuuluu == michal)) { _fun00016_ip = 45; continue _fun00015 }
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
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = _closure2_slot5;
                    tangon = [1];
                    tangon[1] = entity;
                    report = _closure2_slot13;
                    entity = null;
                    report = entity == report;
                    golfie = 0;
                    entity = 0;
                    if(report) { _fun00018_ip = 67; continue _fun00017 }
 40:
                    oscard = _closure2_slot12;
                    report = 1;
                    if(!oscard) { _fun00018_ip = 64; continue _fun00017 }
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
                    report = _closure1_slot22;
                    entity = _closure2_slot11;
                    option = undefined;
                    oscard = report.bind(option)(entity);
                    report = oscard.bind(option)();
                    entity = report.done;
                    if(entity) { _fun00018_ip = 275; continue _fun00017 }
 169:
                    entity = report.value;
                    romeon = entity.type;
                    yankee = _closure1_slot15;
                    yankee = yankee.GUILD;
                    if(!(romeon !== yankee)) { _fun00018_ip = 250; continue _fun00017 }
 193:
                    romeon = entity.type;
                    yankee = _closure1_slot15;
                    yankee = yankee.FOLDER;
                    if(!(romeon === yankee)) { _fun00018_ip = 260; continue _fun00017 }
 212:
                    romeon = entity.expanded;
                    yankee = tangon.push;
                    if(romeon) { _fun00018_ip = 233; continue _fun00017 }
 226:
                    romeon = yankee.bind(tangon)(offset);
                    _fun00018_ip = 260; continue _fun00017;
 233:
                    entity = entity.children;
                    entity = entity.length;
                    entity = yankee.bind(tangon)(entity);
                    _fun00018_ip = 260; continue _fun00017;
 250:
                    entity = tangon.push;
                    entity = entity.bind(tangon)(offset);
 260:
                    yankee = oscard.bind(option)();
                    entity = yankee.done;
                    report = yankee;
                    if(!entity) { _fun00018_ip = 169; continue _fun00017 }
 275:
                    entity = _closure2_slot8;
                    entity = entity.length;
                    if(!(entity > golfie)) { _fun00018_ip = 307; continue _fun00017 }
 288:
                    report = tangon.push;
                    entity = _closure2_slot8;
                    entity = entity.length;
                    entity = report.bind(tangon)(entity);
 307:
                    oscard = new Array(0);
                    var _closure3_slot0 = oscard;
                    entity = _closure2_slot14;
                    if(!(entity > golfie)) { _fun00018_ip = 339; continue _fun00017 }
 323:
                    report = oscard.push;
                    entity = 'unavailable-guilds';
                    entity = report.bind(oscard)(entity);
 339:
                    entity = _closure2_slot7;
                    if(!entity) { _fun00018_ip = 359; continue _fun00017 }
 346:
                    report = _closure2_slot11;
                    report = report.length;
                    entity = golfie === report;
 359:
                    if(!entity) { _fun00018_ip = 370; continue _fun00017 }
 362:
                    report = _closure2_slot14;
                    entity = golfie === report;
 370:
                    if(!entity) { _fun00018_ip = 389; continue _fun00017 }
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
                    if(!entity) { _fun00018_ip = 444; continue _fun00017 }
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
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            report = argFoo;
                            tangon = _closure2_slot11;
                            zuuluu = _closure2_slot13;
                            entity = _closure1_slot17;
                            entity = entity.PENDING_JOIN_REQUESTS;
                            if(!(report === entity)) { _fun00020_ip = 37; continue _fun00019 }
 31:
                            entity = null;
                            if(!(entity == zuuluu)) { _fun00020_ip = 115; continue _fun00019 }
 37:
                            entity = _closure1_slot17;
                            entity = entity.GUILDS;
                            zuuluu = report >= entity;
                            entity = 0;
                            if(!zuuluu) { _fun00020_ip = 119; continue _fun00019 }
 56:
                            zuuluu = _closure1_slot17;
                            zuuluu = zuuluu.GUILDS;
                            zuuluu = report - zuuluu;
                            tangon = tangon[zuuluu];
                            zuuluu = null;
                            report = zuuluu == tangon;
                            zuuluu = 0;
                            if(report) { _fun00020_ip = 110; continue _fun00019 }
 85:
                            report = tangon.type;
                            tangon = _closure1_slot15;
                            tangon = tangon.FOLDER;
                            zuuluu = 0;
                            if(!(report === tangon)) { _fun00020_ip = 110; continue _fun00019 }
 106:
                            zuuluu = _closure1_slot21;
 110:
                            entity = zuuluu;
                            _fun00020_ip = 119; continue _fun00019;
 115:
                            entity = _closure1_slot21;
 119:
                            return entity;
                        }
                    };
                    zuuluu = 'sectionSize';
                    entity[zuuluu] = tangon;
                    tangon = function(argFoo, argBar) { // Original name: itemSize
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
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
                            entity = _closure1_slot17;
                            entity = entity.MESSAGES;
                            if(!(entity !== yankee)) { _fun00022_ip = 486; continue _fun00021 }
 111:
                            entity = _closure1_slot17;
                            entity = entity.FAVORITES;
                            if(!(entity !== yankee)) { _fun00022_ip = 486; continue _fun00021 }
 128:
                            entity = _closure1_slot17;
                            entity = entity.LURKING_GUILDS;
                            if(!(entity !== yankee)) { _fun00022_ip = 486; continue _fun00021 }
 145:
                            entity = _closure1_slot17;
                            entity = entity.GUEST_GUILDS;
                            if(!(entity !== yankee)) { _fun00022_ip = 486; continue _fun00021 }
 162:
                            entity = _closure1_slot17;
                            entity = entity.UNREAD_PRIVATE_CHANNELS;
                            if(!(entity !== yankee)) { _fun00022_ip = 446; continue _fun00021 }
 179:
                            entity = _closure1_slot17;
                            zuuluu = entity.SEPARATOR;
                            entity = 9;
                            if(!(zuuluu !== yankee)) { _fun00022_ip = 490; continue _fun00021 }
 199:
                            zuuluu = _closure1_slot17;
                            zuuluu = zuuluu.PENDING_JOIN_REQUESTS;
                            if(!(zuuluu !== yankee)) { _fun00022_ip = 388; continue _fun00021 }
 216:
                            verify = null;
                            zuuluu = verify == oscard;
                            option = 0;
                            entity = 0;
                            if(zuuluu) { _fun00022_ip = 490; continue _fun00021 }
 232:
                            zuuluu = _closure1_slot17;
                            zuuluu = zuuluu.GUILDS;
                            zuuluu = yankee - zuuluu;
                            yankee = golfie.length;
                            if(!(yankee >= zuuluu)) { _fun00022_ip = 263; continue _fun00021 }
 255:
                            offset = offset[oscard];
                            if(!(verify == offset)) { _fun00022_ip = 382; continue _fun00021 }
 263:
                            golfie = golfie[zuuluu];
                            offset = verify == golfie;
                            zuuluu = 0;
                            if(offset) { _fun00022_ip = 377; continue _fun00021 }
 276:
                            yankee = golfie.type;
                            offset = _closure1_slot15;
                            offset = offset.ROOT;
                            zuuluu = 0;
                            if(!(yankee !== offset)) { _fun00022_ip = 377; continue _fun00021 }
 297:
                            yankee = golfie.type;
                            offset = _closure1_slot15;
                            offset = offset.GUILD;
                            if(!(yankee === offset)) { _fun00022_ip = 325; continue _fun00021 }
 316:
                            offset = oscard > option;
                            zuuluu = 0;
                            if(offset) { _fun00022_ip = 377; continue _fun00021 }
 325:
                            yankee = golfie.type;
                            offset = _closure1_slot15;
                            offset = offset.FOLDER;
                            if(!(yankee === offset)) { _fun00022_ip = 373; continue _fun00021 }
 344:
                            offset = golfie.expanded;
                            zuuluu = 0;
                            if(!offset) { _fun00022_ip = 377; continue _fun00021 }
 355:
                            golfie = golfie.children;
                            golfie = golfie[oscard];
                            golfie = verify == golfie;
                            zuuluu = 0;
                            if(golfie) { _fun00022_ip = 377; continue _fun00021 }
 373:
                            zuuluu = _closure1_slot21;
 377:
                            entity = zuuluu;
                            _fun00022_ip = 490; continue _fun00021;
 382:
                            entity = _closure1_slot21;
                            _fun00022_ip = 490; continue _fun00021;
 388:
                            option = null;
                            verify = option != oscard;
                            zuuluu = 0;
                            if(!verify) { _fun00022_ip = 441; continue _fun00021 }
 399:
                            verify = option != tangon;
                            zuuluu = 0;
                            if(!verify) { _fun00022_ip = 441; continue _fun00021 }
 408:
                            verify = tangon.expanded;
                            zuuluu = 0;
                            if(!verify) { _fun00022_ip = 441; continue _fun00021 }
 419:
                            tangon = tangon.children;
                            tangon = tangon[oscard];
                            tangon = option != tangon;
                            zuuluu = 0;
                            if(!tangon) { _fun00022_ip = 441; continue _fun00021 }
 437:
                            zuuluu = _closure1_slot21;
 441:
                            entity = zuuluu;
                            _fun00022_ip = 490; continue _fun00021;
 446:
                            tangon = null;
                            golfie = tangon != oscard;
                            zuuluu = -1;
                            if(!golfie) { _fun00022_ip = 464; continue _fun00021 }
 461:
                            zuuluu = oscard;
 464:
                            zuuluu = report[zuuluu];
                            tangon = tangon == zuuluu;
                            zuuluu = 0;
                            if(tangon) { _fun00022_ip = 481; continue _fun00021 }
 477:
                            zuuluu = _closure1_slot21;
 481:
                            entity = zuuluu;
                            _fun00022_ip = 490; continue _fun00021;
 486:
                            entity = _closure1_slot21;
 490:
                            return entity;
                        }
                    };
                    zuuluu = 'itemSize';
                    entity[zuuluu] = tangon;
                    tangon = function() { // Original name: footerSize
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            michal = _closure3_slot0;
                            entity = _closure1_slot22;
                            option = undefined;
                            golfie = entity.bind(option)(michal);
                            zuuluu = golfie.bind(option)();
                            entity = zuuluu.done;
                            oscard = 9;
                            report = 'app-education';
                            tangon = zuuluu;
                            zuuluu = 0;
                            michal = 0;
                            if(entity) { _fun00024_ip = 91; continue _fun00023 }
 49:
                            entity = tangon.value;
                            offset = zuuluu;
                            if(!(report === entity)) { _fun00024_ip = 65; continue _fun00023 }
 61:
                            offset = zuuluu + oscard;
 65:
                            entity = _closure1_slot21;
                            zuuluu = offset + entity;
                            yankee = golfie.bind(option)();
                            entity = yankee.done;
                            tangon = yankee;
                            michal = zuuluu;
                            if(!entity) { _fun00024_ip = 49; continue _fun00023 }
 91:
                            entity = 8;
                            entity = michal + entity;
                            return entity;
                        }
                    };
                    zuuluu = 'footerSize';
                    entity[zuuluu] = tangon;
                    tangon = function(argFoo) { // Original name: renderSection
                        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                            report = argFoo;
                            tangon = _closure2_slot11;
                            verify = _closure2_slot13;
                            entity = _closure1_slot17;
                            entity = entity.GUILDS;
                            if(!(!(report >= entity))) { _fun00026_ip = 130; continue _fun00025 }
 31:
                            entity = _closure1_slot17;
                            zuuluu = entity.PENDING_JOIN_REQUESTS;
                            oscard = null;
                            entity = null;
                            if(!(report === zuuluu)) { _fun00026_ip = 251; continue _fun00025 }
 52:
                            zuuluu = oscard != verify;
                            entity = null;
                            if(!zuuluu) { _fun00026_ip = 251; continue _fun00025 }
 64:
                            option = _closure1_slot19;
                            oscard = _closure1_slot1;
                            golfie = _closure1_slot2;
                            zuuluu = 16;
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
                            _fun00026_ip = 251; continue _fun00025;
 130:
                            zuuluu = _closure1_slot17;
                            zuuluu = zuuluu.GUILDS;
                            zuuluu = report - zuuluu;
                            oscard = tangon[zuuluu];
                            tangon = oscard.type;
                            zuuluu = _closure1_slot15;
                            zuuluu = zuuluu.FOLDER;
                            entity = null;
                            if(!(tangon === zuuluu)) { _fun00026_ip = 251; continue _fun00025 }
 169:
                            report = _closure1_slot19;
                            zuuluu = _closure1_slot1;
                            tangon = _closure1_slot2;
                            michal = 15;
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
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            offset = argFoo;
                            tangon = argBar;
                            verify = _closure2_slot11;
                            oscard = _closure2_slot6;
                            zuuluu = _closure2_slot9;
                            report = _closure2_slot10;
                            option = _closure2_slot8;
                            golfie = _closure2_slot13;
                            entity = _closure1_slot17;
                            entity = entity.MESSAGES;
                            if(!(entity !== offset)) { _fun00028_ip = 778; continue _fun00027 }
 53:
                            entity = _closure1_slot17;
                            entity = entity.FAVORITES;
                            if(!(entity !== offset)) { _fun00028_ip = 742; continue _fun00027 }
 70:
                            entity = _closure1_slot17;
                            entity = entity.LURKING_GUILDS;
                            if(!(entity !== offset)) { _fun00028_ip = 686; continue _fun00027 }
 87:
                            entity = _closure1_slot17;
                            entity = entity.GUEST_GUILDS;
                            if(!(entity !== offset)) { _fun00028_ip = 627; continue _fun00027 }
 104:
                            entity = _closure1_slot17;
                            entity = entity.UNREAD_PRIVATE_CHANNELS;
                            if(!(entity !== offset)) { _fun00028_ip = 568; continue _fun00027 }
 121:
                            entity = _closure1_slot17;
                            entity = entity.SEPARATOR;
                            if(!(entity !== offset)) { _fun00028_ip = 529; continue _fun00027 }
 138:
                            entity = _closure1_slot17;
                            entity = entity.PENDING_JOIN_REQUESTS;
                            if(!(entity !== offset)) { _fun00028_ip = 425; continue _fun00027 }
 155:
                            entity = _closure1_slot17;
                            entity = entity.GUILDS;
                            entity = offset - entity;
                            offset = verify.length;
                            if(!(!(entity >= offset))) { _fun00028_ip = 365; continue _fun00027 }
 181:
                            verify = verify[entity];
                            romeon = null;
                            offset = romeon == verify;
                            entity = null;
                            if(offset) { _fun00028_ip = 360; continue _fun00027 }
 199:
                            yankee = verify.type;
                            offset = _closure1_slot15;
                            offset = offset.ROOT;
                            entity = null;
                            if(!(yankee !== offset)) { _fun00028_ip = 360; continue _fun00027 }
 223:
                            yankee = verify.type;
                            offset = _closure1_slot15;
                            offset = offset.GUILD;
                            if(!(yankee === offset)) { _fun00028_ip = 253; continue _fun00027 }
 242:
                            offset = 0;
                            offset = tangon > offset;
                            entity = null;
                            if(offset) { _fun00028_ip = 360; continue _fun00027 }
 253:
                            yankee = verify.type;
                            offset = _closure1_slot15;
                            offset = offset.FOLDER;
                            backup = verify;
                            if(!(yankee === offset)) { _fun00028_ip = 284; continue _fun00027 }
 275:
                            verify = verify.children;
                            backup = verify[tangon];
 284:
                            offset = romeon == backup;
                            verify = null;
                            if(offset) { _fun00028_ip = 357; continue _fun00027 }
 293:
                            yankee = backup.type;
                            offset = _closure1_slot15;
                            offset = offset.GUILD;
                            verify = null;
                            if(!(yankee === offset)) { _fun00028_ip = 357; continue _fun00027 }
 314:
                            foxtra = _closure1_slot19;
                            yankee = _closure1_slot1;
                            romeon = _closure1_slot2;
                            offset = 19;
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
                            _fun00028_ip = 812; continue _fun00027;
 365:
                            foxtra = option[tangon];
                            option = null;
                            verify = option != foxtra;
                            if(!verify) { _fun00028_ip = 417; continue _fun00027 }
 378:
                            romeon = _closure1_slot19;
                            offset = _closure1_slot1;
                            yankee = _closure1_slot2;
                            verify = 23;
                            verify = yankee[verify];
                            yankee = undefined;
                            offset = offset.bind(yankee)(verify);
                            verify = {};
                            verify['restrictedGuild'] = foxtra;
                            option = romeon.bind(yankee)(offset, verify);
 417:
                            entity = option;
                            _fun00028_ip = 812; continue _fun00027;
 425:
                            offset = null;
                            option = offset == golfie;
                            entity = null;
                            if(option) { _fun00028_ip = 812; continue _fun00027 }
 439:
                            golfie = golfie.children;
                            romeon = golfie[tangon];
                            option = offset == romeon;
                            golfie = null;
                            if(option) { _fun00028_ip = 521; continue _fun00027 }
 457:
                            verify = romeon.type;
                            option = _closure1_slot15;
                            option = option.GUILD;
                            golfie = null;
                            if(!(verify === option)) { _fun00028_ip = 521; continue _fun00027 }
 478:
                            yankee = _closure1_slot19;
                            verify = _closure1_slot1;
                            offset = _closure1_slot2;
                            option = 22;
                            option = offset[option];
                            offset = undefined;
                            verify = verify.bind(offset)(option);
                            option = {};
                            romeon = romeon.id;
                            option['guildId'] = romeon;
                            golfie = yankee.bind(offset)(verify, option);
 521:
                            entity = golfie;
                            _fun00028_ip = 812; continue _fun00027;
 529:
                            offset = _closure1_slot19;
                            option = _closure1_slot1;
                            verify = _closure1_slot2;
                            golfie = 21;
                            golfie = verify[golfie];
                            verify = undefined;
                            option = option.bind(verify)(golfie);
                            golfie = {};
                            entity = offset.bind(verify)(option, golfie);
                            _fun00028_ip = 812; continue _fun00027;
 568:
                            yankee = oscard[tangon];
                            oscard = null;
                            golfie = oscard == yankee;
                            if(golfie) { _fun00028_ip = 619; continue _fun00027 }
 581:
                            offset = _closure1_slot19;
                            option = _closure1_slot1;
                            verify = _closure1_slot2;
                            golfie = 20;
                            golfie = verify[golfie];
                            verify = undefined;
                            option = option.bind(verify)(golfie);
                            golfie = {};
                            golfie['channelId'] = yankee;
                            oscard = offset.bind(verify)(option, golfie);
 619:
                            entity = oscard;
                            _fun00028_ip = 812; continue _fun00027;
 627:
                            offset = report[tangon];
                            report = null;
                            oscard = report == offset;
                            if(oscard) { _fun00028_ip = 678; continue _fun00027 }
 640:
                            verify = _closure1_slot19;
                            golfie = _closure1_slot1;
                            option = _closure1_slot2;
                            oscard = 19;
                            oscard = option[oscard];
                            option = undefined;
                            golfie = golfie.bind(option)(oscard);
                            oscard = {};
                            oscard['guildId'] = offset;
                            report = verify.bind(option)(golfie, oscard);
 678:
                            entity = report;
                            _fun00028_ip = 812; continue _fun00027;
 686:
                            option = zuuluu[tangon];
                            zuuluu = null;
                            tangon = zuuluu == option;
                            if(tangon) { _fun00028_ip = 737; continue _fun00027 }
 699:
                            golfie = _closure1_slot19;
                            report = _closure1_slot1;
                            oscard = _closure1_slot2;
                            tangon = 19;
                            tangon = oscard[tangon];
                            oscard = undefined;
                            report = report.bind(oscard)(tangon);
                            tangon = {};
                            tangon['guildId'] = option;
                            zuuluu = golfie.bind(oscard)(report, tangon);
 737:
                            entity = zuuluu;
                            _fun00028_ip = 812; continue _fun00027;
 742:
                            oscard = _closure1_slot19;
                            tangon = _closure1_slot1;
                            report = _closure1_slot2;
                            zuuluu = 18;
                            zuuluu = report[zuuluu];
                            report = undefined;
                            tangon = tangon.bind(report)(zuuluu);
                            zuuluu = {};
                            entity = oscard.bind(report)(tangon, zuuluu);
                            _fun00028_ip = 812; continue _fun00027;
 778:
                            report = _closure1_slot19;
                            zuuluu = _closure1_slot1;
                            tangon = _closure1_slot2;
                            michal = 17;
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
                            tangon = _closure1_slot19;
                            michal = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            entity = 24;
                            entity = zuuluu[entity];
                            zuuluu = undefined;
                            michal = michal.bind(zuuluu)(entity);
                            entity = {};
                            oscard = golfie.map;
                            report = function(argFoo) {
                                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                                    report = argFoo;
                                    entity = 'unavailable-guilds';
                                    if(!(entity !== report)) { _fun00030_ip = 223; continue _fun00029 }
 16:
                                    entity = 'empty-nux';
                                    if(!(entity !== report)) { _fun00030_ip = 183; continue _fun00029 }
 29:
                                    entity = 'create-join-guild';
                                    if(!(entity !== report)) { _fun00030_ip = 143; continue _fun00029 }
 39:
                                    entity = 'hubs';
                                    if(!(entity !== report)) { _fun00030_ip = 103; continue _fun00029 }
 49:
                                    entity = 'app-education';
                                    if(!(entity !== report)) { _fun00030_ip = 63; continue _fun00029 }
 59:
                                    entity = undefined;
                                    return entity;
 63:
                                    tangon = _closure1_slot19;
                                    michal = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    entity = 29;
                                    entity = zuuluu[entity];
                                    zuuluu = undefined;
                                    michal = michal.bind(zuuluu)(entity);
                                    entity = {};
                                    entity = tangon.bind(zuuluu)(michal, entity, report);
                                    return entity;
 103:
                                    tangon = _closure1_slot19;
                                    michal = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    entity = 28;
                                    entity = zuuluu[entity];
                                    zuuluu = undefined;
                                    michal = michal.bind(zuuluu)(entity);
                                    entity = {};
                                    entity = tangon.bind(zuuluu)(michal, entity, report);
                                    return entity;
 143:
                                    tangon = _closure1_slot19;
                                    michal = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    entity = 27;
                                    entity = zuuluu[entity];
                                    zuuluu = undefined;
                                    michal = michal.bind(zuuluu)(entity);
                                    entity = {};
                                    entity = tangon.bind(zuuluu)(michal, entity, report);
                                    return entity;
 183:
                                    tangon = _closure1_slot19;
                                    michal = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    entity = 26;
                                    entity = zuuluu[entity];
                                    zuuluu = undefined;
                                    michal = michal.bind(zuuluu)(entity);
                                    entity = {};
                                    entity = tangon.bind(zuuluu)(michal, entity, report);
                                    return entity;
 223:
                                    tangon = _closure1_slot19;
                                    michal = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    entity = 25;
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
                        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                            zuuluu = argFoo;
                            tangon = argBar;
                            report = argBaz;
                            golfie = _closure1_slot0;
                            entity = _closure1_slot2;
                            option = 41;
                            michal = entity[option];
                            entity = undefined;
                            michal = golfie.bind(entity)(michal);
                            michal = michal.FastListItemTypes;
                            michal = michal.ITEM;
                            if(!(michal !== zuuluu)) { _fun00032_ip = 85; continue _fun00031 }
 50:
                            golfie = _closure1_slot0;
                            michal = _closure1_slot2;
                            michal = michal[option];
                            michal = golfie.bind(entity)(michal);
                            michal = michal.FastListItemTypes;
                            michal = michal.SECTION;
                            if(!(michal !== zuuluu)) { _fun00032_ip = 85; continue _fun00031 }
 83:
                            return entity;
 85:
                            michal = _closure1_slot17;
                            michal = michal.GUILDS;
                            if(!(!(tangon < michal))) { _fun00032_ip = 271; continue _fun00031 }
 102:
                            zuuluu = _closure2_slot11;
                            michal = _closure1_slot17;
                            michal = michal.GUILDS;
                            michal = tangon - michal;
                            michal = zuuluu[michal];
                            tangon = null;
                            if(!(tangon != michal)) { _fun00032_ip = 271; continue _fun00031 }
 136:
                            golfie = michal.type;
                            zuuluu = _closure1_slot15;
                            zuuluu = zuuluu.ROOT;
                            if(!(golfie !== zuuluu)) { _fun00032_ip = 271; continue _fun00031 }
 155:
                            option = michal.type;
                            zuuluu = _closure1_slot15;
                            golfie = zuuluu.FOLDER;
                            zuuluu = michal;
                            if(!(option === golfie)) { _fun00032_ip = 190; continue _fun00031 }
 177:
                            if(!(tangon != report)) { _fun00032_ip = 242; continue _fun00031 }
 181:
                            golfie = michal.children;
                            zuuluu = golfie[report];
 190:
                            golfie = zuuluu.type;
                            oscard = _closure1_slot15;
                            oscard = oscard.GUILD;
                            if(!(golfie === oscard)) { _fun00032_ip = 213; continue _fun00031 }
 209:
                            if(!(tangon != report)) { _fun00032_ip = 271; continue _fun00031 }
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
                        tangon = _closure1_slot19;
                        michal = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 30;
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
                        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                            zuuluu = _closure1_slot16;
                            entity = zuuluu.getState;
                            entity = entity.bind(zuuluu)();
                            entity = entity.dropSpecs;
                            tangon = null;
                            if(!(tangon == entity)) { _fun00034_ip = 53; continue _fun00033 }
 29:
                            zuuluu = _closure1_slot16;
                            entity = zuuluu.getState;
                            entity = entity.bind(zuuluu)();
                            entity = entity.dragSpecs;
                            if(!(tangon != entity)) { _fun00034_ip = 57; continue _fun00033 }
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
                            verify = _closure1_slot17;
                            verify = verify.MESSAGES;
                            if(!(verify !== yankee)) { _fun00034_ip = 784; continue _fun00033 }
 193:
                            verify = _closure1_slot17;
                            verify = verify.FAVORITES;
                            if(!(verify !== yankee)) { _fun00034_ip = 772; continue _fun00033 }
 210:
                            verify = _closure1_slot17;
                            verify = verify.PENDING_JOIN_REQUESTS;
                            if(!(verify !== yankee)) { _fun00034_ip = 672; continue _fun00033 }
 227:
                            verify = _closure1_slot17;
                            verify = verify.LURKING_GUILDS;
                            if(!(verify !== yankee)) { _fun00034_ip = 609; continue _fun00033 }
 244:
                            verify = _closure1_slot17;
                            verify = verify.GUEST_GUILDS;
                            if(!(verify !== yankee)) { _fun00034_ip = 543; continue _fun00033 }
 261:
                            verify = _closure1_slot17;
                            verify = verify.UNREAD_PRIVATE_CHANNELS;
                            if(!(verify !== yankee)) { _fun00034_ip = 477; continue _fun00033 }
 278:
                            verify = _closure1_slot17;
                            verify = verify.SEPARATOR;
                            if(!(verify !== yankee)) { _fun00034_ip = 462; continue _fun00033 }
 295:
                            verify = _closure1_slot17;
                            verify = verify.GUILDS;
                            verify = _closure1_slot17;
                            verify = verify.GUILDS;
                            verify = yankee - verify;
                            yankee = entity[verify];
                            if(!(tangon != yankee)) { _fun00034_ip = 363; continue _fun00033 }
 327:
                            if(!(tangon != oscard)) { _fun00034_ip = 356; continue _fun00033 }
 331:
                            romeon = yankee.children;
                            romeon = romeon[oscard];
                            backup = tangon == romeon;
                            foxtra = undefined;
                            if(backup) { _fun00034_ip = 354; continue _fun00033 }
 349:
                            foxtra = romeon.id;
 354:
                            _fun00034_ip = 361; continue _fun00033;
 356:
                            foxtra = yankee.id;
 361:
                            _fun00034_ip = 410; continue _fun00033;
 363:
                            entity = entity.length;
                            yankee = verify >= entity;
                            entity = undefined;
                            if(!yankee) { _fun00034_ip = 407; continue _fun00033 }
 377:
                            yankee = tangon != oscard;
                            entity = undefined;
                            if(!yankee) { _fun00034_ip = 407; continue _fun00033 }
 386:
                            offset = offset[oscard];
                            yankee = tangon == offset;
                            verify = undefined;
                            if(yankee) { _fun00034_ip = 404; continue _fun00033 }
 399:
                            verify = offset.id;
 404:
                            entity = verify;
 407:
                            foxtra = entity;
 410:
                            verify = tangon != foxtra;
                            entity = undefined;
                            if(!verify) { _fun00034_ip = 457; continue _fun00033 }
 419:
                            verify = _closure1_slot20;
                            romeon = verify.GUILDS;
                            verify = global;
                            verify = verify.HermesInternal;
                            yankee = verify.concat;
                            offset = '';
                            verify = ':';
                            entity = yankee.bind(offset)(romeon, verify, foxtra);
 457:
                            _fun00034_ip = 794; continue _fun00033;
 462:
                            verify = _closure1_slot20;
                            entity = verify.SEPARATOR;
                            _fun00034_ip = 794; continue _fun00033;
 477:
                            if(!(tangon != oscard)) { _fun00034_ip = 525; continue _fun00033 }
 481:
                            verify = _closure1_slot20;
                            romeon = verify.UNREAD_PRIVATE_CHANNELS;
                            yankee = option[oscard];
                            option = global;
                            option = option.HermesInternal;
                            offset = option.concat;
                            verify = '';
                            option = ':';
                            option = offset.bind(verify)(romeon, option, yankee);
                            _fun00034_ip = 535; continue _fun00033;
 525:
                            verify = _closure1_slot20;
                            option = verify.UNREAD_PRIVATE_CHANNELS;
 535:
                            entity = option;
                            _fun00034_ip = 794; continue _fun00033;
 543:
                            if(!(tangon != oscard)) { _fun00034_ip = 591; continue _fun00033 }
 547:
                            option = _closure1_slot20;
                            yankee = option.GUEST_GUILDS;
                            offset = golfie[oscard];
                            golfie = global;
                            golfie = golfie.HermesInternal;
                            verify = golfie.concat;
                            option = '';
                            golfie = ':';
                            golfie = verify.bind(option)(yankee, golfie, offset);
                            _fun00034_ip = 601; continue _fun00033;
 591:
                            option = _closure1_slot20;
                            golfie = option.GUEST_GUILDS;
 601:
                            entity = golfie;
                            _fun00034_ip = 794; continue _fun00033;
 609:
                            if(!(tangon != oscard)) { _fun00034_ip = 657; continue _fun00033 }
 613:
                            golfie = _closure1_slot20;
                            offset = golfie.LURKING_GUILDS;
                            verify = zuuluu[oscard];
                            zuuluu = global;
                            zuuluu = zuuluu.HermesInternal;
                            option = zuuluu.concat;
                            golfie = '';
                            zuuluu = ':';
                            zuuluu = option.bind(golfie)(offset, zuuluu, verify);
                            _fun00034_ip = 667; continue _fun00033;
 657:
                            golfie = _closure1_slot20;
                            zuuluu = golfie.LURKING_GUILDS;
 667:
                            entity = zuuluu;
                            _fun00034_ip = 794; continue _fun00033;
 672:
                            if(!(tangon != oscard)) { _fun00034_ip = 760; continue _fun00033 }
 676:
                            golfie = tangon == report;
                            option = undefined;
                            if(golfie) { _fun00034_ip = 708; continue _fun00033 }
 685:
                            report = report.children;
                            report = report[oscard];
                            oscard = tangon == report;
                            option = undefined;
                            if(oscard) { _fun00034_ip = 708; continue _fun00033 }
 703:
                            option = report.id;
 708:
                            tangon = tangon != option;
                            zuuluu = undefined;
                            if(!tangon) { _fun00034_ip = 755; continue _fun00033 }
 717:
                            tangon = _closure1_slot20;
                            golfie = tangon.PENDING_JOIN_REQUESTS;
                            tangon = global;
                            tangon = tangon.HermesInternal;
                            oscard = tangon.concat;
                            report = '';
                            tangon = ':';
                            zuuluu = oscard.bind(report)(golfie, tangon, option);
 755:
                            entity = zuuluu;
                            _fun00034_ip = 794; continue _fun00033;
 760:
                            zuuluu = _closure1_slot20;
                            entity = zuuluu.PENDING_JOIN_REQUESTS;
                            _fun00034_ip = 794; continue _fun00033;
 772:
                            zuuluu = _closure1_slot20;
                            entity = zuuluu.FAVORITES;
                            _fun00034_ip = 794; continue _fun00033;
 784:
                            michal = _closure1_slot20;
                            entity = michal.MESSAGES;
 794:
                            return entity;
                        }
                    };
                    zuuluu = 'getAnchorIdFromIndex';
                    entity[zuuluu] = tangon;
                    zuuluu = function(argFoo) { // Original name: getAnchorIndexFromId
                        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
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
                            michal = _closure1_slot20;
                            michal = michal.MESSAGES;
                            if(!(michal !== verify)) { _fun00036_ip = 1338; continue _fun00035 }
 127:
                            michal = _closure1_slot20;
                            michal = michal.FAVORITES;
                            if(!(michal !== verify)) { _fun00036_ip = 1317; continue _fun00035 }
 144:
                            michal = _closure1_slot20;
                            michal = michal.PENDING_JOIN_REQUESTS;
                            if(!(michal !== verify)) { _fun00036_ip = 1296; continue _fun00035 }
 161:
                            michal = _closure1_slot20;
                            michal = michal.LURKING_GUILDS;
                            if(!(michal !== verify)) { _fun00036_ip = 1275; continue _fun00035 }
 178:
                            michal = _closure1_slot20;
                            michal = michal.GUEST_GUILDS;
                            if(!(michal !== verify)) { _fun00036_ip = 1254; continue _fun00035 }
 195:
                            michal = _closure1_slot20;
                            michal = michal.UNREAD_PRIVATE_CHANNELS;
                            if(!(michal !== verify)) { _fun00036_ip = 1233; continue _fun00035 }
 212:
                            michal = _closure1_slot20;
                            michal = michal.SEPARATOR;
                            if(!(michal !== verify)) { _fun00036_ip = 1209; continue _fun00035 }
 229:
                            offset = verify.startsWith;
                            michal = _closure1_slot20;
                            michal = michal.LURKING_GUILDS;
                            michal = offset.bind(verify)(michal);
                            if(michal) { _fun00036_ip = 1091; continue _fun00035 }
 256:
                            offset = verify.startsWith;
                            michal = _closure1_slot20;
                            michal = michal.PENDING_JOIN_REQUESTS;
                            michal = offset.bind(verify)(michal);
                            if(!michal) { _fun00036_ip = 413; continue _fun00035 }
 283:
                            michal = null;
                            if(!(michal != entity)) { _fun00036_ip = 413; continue _fun00035 }
 292:
                            michal = _closure1_slot22;
                            entity = entity.children;
                            backup = undefined;
                            foxtra = michal.bind(backup)(entity);
                            michal = foxtra.bind(backup)();
                            entity = michal.done;
                            yankee = 0;
                            romeon = michal;
                            offset = 0;
                            if(entity) { _fun00036_ip = 413; continue _fun00035 }
 327:
                            entity = romeon.value;
                            kiloes = _closure1_slot25;
                            michal = _closure1_slot20;
                            michal = michal.PENDING_JOIN_REQUESTS;
                            entity = entity.id;
                            entity = kiloes.bind(backup)(michal, verify, entity);
                            michal = offset;
                            if(entity) { _fun00036_ip = 384; continue _fun00035 }
 364:
                            offset = michal + 1;
                            kiloes = foxtra.bind(backup)();
                            entity = kiloes.done;
                            romeon = kiloes;
                            if(entity) { _fun00036_ip = 413; continue _fun00035 }
 382:
                            _fun00036_ip = 327; continue _fun00035;
 384:
                            entity = {};
                            offset = _closure1_slot17;
                            offset = offset.PENDING_JOIN_REQUESTS;
                            offset = yankee + offset;
                            entity['section'] = offset;
                            entity['item'] = michal;
                            _fun00036_ip = 1357; continue _fun00035;
 413:
                            offset = verify.startsWith;
                            michal = _closure1_slot20;
                            michal = michal.GUEST_GUILDS;
                            michal = offset.bind(verify)(michal);
                            if(michal) { _fun00036_ip = 973; continue _fun00035 }
 440:
                            offset = verify.startsWith;
                            michal = _closure1_slot20;
                            michal = michal.UNREAD_PRIVATE_CHANNELS;
                            michal = offset.bind(verify)(michal);
                            if(!michal) { _fun00036_ip = 572; continue _fun00035 }
 464:
                            michal = _closure1_slot22;
                            foxtra = undefined;
                            romeon = michal.bind(foxtra)(option);
                            option = romeon.bind(foxtra)();
                            michal = option.done;
                            offset = option;
                            yankee = 0;
                            if(michal) { _fun00036_ip = 572; continue _fun00035 }
 492:
                            backup = offset.value;
                            option = _closure1_slot25;
                            michal = _closure1_slot20;
                            michal = michal.UNREAD_PRIVATE_CHANNELS;
                            michal = option.bind(foxtra)(michal, verify, backup);
                            option = yankee;
                            if(michal) { _fun00036_ip = 544; continue _fun00035 }
 524:
                            yankee = option + 1;
                            backup = romeon.bind(foxtra)();
                            michal = backup.done;
                            offset = backup;
                            if(michal) { _fun00036_ip = 572; continue _fun00035 }
 542:
                            _fun00036_ip = 492; continue _fun00035;
 544:
                            michal = {};
                            offset = _closure1_slot17;
                            offset = offset.UNREAD_PRIVATE_CHANNELS;
                            michal['section'] = offset;
                            michal['item'] = option;
                            entity = michal;
                            _fun00036_ip = 1357; continue _fun00035;
 572:
                            option = verify.startsWith;
                            michal = _closure1_slot20;
                            michal = michal.GUILDS;
                            michal = option.bind(verify)(michal);
                            romeon = undefined;
                            entity = undefined;
                            if(!michal) { _fun00036_ip = 1357; continue _fun00035 }
 603:
                            michal = _closure1_slot22;
                            backup = michal.bind(romeon)(golfie);
                            golfie = backup.bind(romeon)();
                            michal = golfie.done;
                            foxtra = golfie;
                            golfie = 0;
                            option = 0;
                            if(michal) { _fun00036_ip = 848; continue _fun00035 }
 634:
                            michal = foxtra.value;
                            sizing = _closure1_slot25;
                            offset = _closure1_slot20;
                            kiloes = offset.GUILDS;
                            offset = michal.id;
                            kiloes = sizing.bind(romeon)(kiloes, verify, offset);
                            offset = golfie;
                            if(kiloes) { _fun00036_ip = 820; continue _fun00035 }
 674:
                            kiloes = _closure1_slot22;
                            michal = michal.children;
                            result = kiloes.bind(romeon)(michal);
                            kiloes = result.bind(romeon)();
                            michal = kiloes.done;
                            output = 0;
                            sizing = kiloes;
                            if(michal) { _fun00036_ip = 794; continue _fun00035 }
 705:
                            michal = sizing.value;
                            echoed = _closure1_slot25;
                            kiloes = _closure1_slot20;
                            kiloes = kiloes.GUILDS;
                            michal = michal.id;
                            michal = echoed.bind(romeon)(kiloes, verify, michal);
                            kiloes = output;
                            if(michal) { _fun00036_ip = 762; continue _fun00035 }
 742:
                            output = kiloes + 1;
                            echoed = result.bind(romeon)();
                            michal = echoed.done;
                            sizing = echoed;
                            if(michal) { _fun00036_ip = 794; continue _fun00035 }
 760:
                            _fun00036_ip = 705; continue _fun00035;
 762:
                            michal = {};
                            sizing = _closure1_slot17;
                            sizing = sizing.GUILDS;
                            sizing = offset + sizing;
                            michal['section'] = sizing;
                            michal['item'] = kiloes;
                            entity = michal;
                            _fun00036_ip = 1357; continue _fun00035;
 794:
                            golfie = offset + 1;
                            sizing = backup.bind(romeon)();
                            michal = sizing.done;
                            foxtra = sizing;
                            option = golfie;
                            if(michal) { _fun00036_ip = 848; continue _fun00035 }
 815:
                            _fun00036_ip = 634; continue _fun00035;
 820:
                            michal = {};
                            golfie = _closure1_slot17;
                            golfie = golfie.GUILDS;
                            golfie = offset + golfie;
                            michal['section'] = golfie;
                            entity = michal;
                            _fun00036_ip = 1357; continue _fun00035;
 848:
                            michal = _closure1_slot22;
                            offset = michal.bind(romeon)(oscard);
                            oscard = offset.bind(romeon)();
                            michal = oscard.done;
                            yankee = 0;
                            golfie = oscard;
                            entity = undefined;
                            if(michal) { _fun00036_ip = 1357; continue _fun00035 }
 879:
                            michal = golfie.value;
                            foxtra = _closure1_slot25;
                            oscard = _closure1_slot20;
                            oscard = oscard.GUILDS;
                            michal = michal.id;
                            michal = foxtra.bind(romeon)(oscard, verify, michal);
                            oscard = yankee;
                            if(michal) { _fun00036_ip = 941; continue _fun00035 }
 916:
                            yankee = oscard + 1;
                            foxtra = offset.bind(romeon)();
                            michal = foxtra.done;
                            golfie = foxtra;
                            entity = undefined;
                            if(michal) { _fun00036_ip = 1357; continue _fun00035 }
 939:
                            _fun00036_ip = 879; continue _fun00035;
 941:
                            michal = {};
                            golfie = _closure1_slot17;
                            golfie = golfie.GUILDS;
                            golfie = option + golfie;
                            michal['section'] = golfie;
                            michal['item'] = oscard;
                            entity = michal;
                            _fun00036_ip = 1357; continue _fun00035;
 973:
                            michal = _closure1_slot22;
                            offset = undefined;
                            option = michal.bind(offset)(report);
                            report = option.bind(offset)();
                            michal = report.done;
                            oscard = report;
                            golfie = 0;
                            entity = undefined;
                            if(michal) { _fun00036_ip = 1357; continue _fun00035 }
 1006:
                            yankee = oscard.value;
                            report = _closure1_slot25;
                            michal = _closure1_slot20;
                            michal = michal.GUEST_GUILDS;
                            michal = report.bind(offset)(michal, verify, yankee);
                            report = golfie;
                            if(michal) { _fun00036_ip = 1063; continue _fun00035 }
 1038:
                            golfie = report + 1;
                            yankee = option.bind(offset)();
                            michal = yankee.done;
                            oscard = yankee;
                            entity = undefined;
                            if(michal) { _fun00036_ip = 1357; continue _fun00035 }
 1061:
                            _fun00036_ip = 1006; continue _fun00035;
 1063:
                            michal = {};
                            oscard = _closure1_slot17;
                            oscard = oscard.GUEST_GUILDS;
                            michal['section'] = oscard;
                            michal['item'] = report;
                            entity = michal;
                            _fun00036_ip = 1357; continue _fun00035;
 1091:
                            michal = _closure1_slot22;
                            option = undefined;
                            golfie = michal.bind(option)(tangon);
                            tangon = golfie.bind(option)();
                            michal = tangon.done;
                            report = tangon;
                            oscard = 0;
                            entity = undefined;
                            if(michal) { _fun00036_ip = 1357; continue _fun00035 }
 1124:
                            offset = report.value;
                            tangon = _closure1_slot25;
                            michal = _closure1_slot20;
                            michal = michal.LURKING_GUILDS;
                            michal = tangon.bind(option)(michal, verify, offset);
                            tangon = oscard;
                            if(michal) { _fun00036_ip = 1181; continue _fun00035 }
 1156:
                            oscard = tangon + 1;
                            offset = golfie.bind(option)();
                            michal = offset.done;
                            report = offset;
                            entity = undefined;
                            if(michal) { _fun00036_ip = 1357; continue _fun00035 }
 1179:
                            _fun00036_ip = 1124; continue _fun00035;
 1181:
                            michal = {};
                            report = _closure1_slot17;
                            report = report.LURKING_GUILDS;
                            michal['section'] = report;
                            michal['item'] = tangon;
                            entity = michal;
                            _fun00036_ip = 1357; continue _fun00035;
 1209:
                            michal = {};
                            tangon = _closure1_slot17;
                            tangon = tangon.SEPARATOR;
                            michal['section'] = tangon;
                            entity = michal;
                            _fun00036_ip = 1357; continue _fun00035;
 1233:
                            michal = {};
                            tangon = _closure1_slot17;
                            tangon = tangon.UNREAD_PRIVATE_CHANNELS;
                            michal['section'] = tangon;
                            entity = michal;
                            _fun00036_ip = 1357; continue _fun00035;
 1254:
                            michal = {};
                            tangon = _closure1_slot17;
                            tangon = tangon.GUEST_GUILDS;
                            michal['section'] = tangon;
                            entity = michal;
                            _fun00036_ip = 1357; continue _fun00035;
 1275:
                            michal = {};
                            tangon = _closure1_slot17;
                            tangon = tangon.LURKING_GUILDS;
                            michal['section'] = tangon;
                            entity = michal;
                            _fun00036_ip = 1357; continue _fun00035;
 1296:
                            michal = {};
                            tangon = _closure1_slot17;
                            tangon = tangon.PENDING_JOIN_REQUESTS;
                            michal['section'] = tangon;
                            entity = michal;
                            _fun00036_ip = 1357; continue _fun00035;
 1317:
                            michal = {};
                            tangon = _closure1_slot17;
                            tangon = tangon.FAVORITES;
                            michal['section'] = tangon;
                            entity = michal;
                            _fun00036_ip = 1357; continue _fun00035;
 1338:
                            michal = {};
                            zuuluu = _closure1_slot17;
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