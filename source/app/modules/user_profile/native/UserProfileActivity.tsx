// app/modules/user_profile/native/UserProfileActivity.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        yankee = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = yankee;
        var _closure1_slot2 = oscard;
        entity = function(argFoo) { // Original name: ActivityCardText
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = argFoo;
                michal = report.children;
                zuuluu = null;
                tangon = Object.create(zuuluu);
                entity = 0;
                tangon['children'] = entity;
                offset = {};
                verify = report;
                option = tangon;
                oscard = copyDataProperties(offset, verify, option);
                tangon = 'string';
                entity = typeof michal;
                golfie = michal;
                if(!(tangon === entity)) { _fun00004_ip = 55; continue _fun00003 }
 45:
                entity = michal.trim;
                golfie = entity.bind(michal)();
 55:
                michal = zuuluu == golfie;
                entity = null;
                if(michal) { _fun00004_ip = 135; continue _fun00003 }
 64:
                michal = '';
                entity = null;
                if(!(michal !== golfie)) { _fun00004_ip = 135; continue _fun00003 }
 74:
                report = _closure1_slot19;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 15;
                michal = tangon[michal];
                tangon = undefined;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = michal.Text;
                michal = {};
                offset = michal;
                verify = oscard;
                oscard = copyDataProperties(offset, verify);
                oscard = 'children';
                michal[oscard] = golfie;
                entity = report.bind(tangon)(zuuluu, michal);
 135:
                return entity;
            }
        };
        var _closure1_slot23 = entity;
        entity = function(argFoo) { // Original name: MaybeLink
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                tangon = entity.href;
                var _closure2_slot0 = tangon;
                michal = entity.children;
                zuuluu = null;
                entity = michal;
                if(!(zuuluu != tangon)) { _fun00006_ip = 71; continue _fun00005 }
 29:
                report = _closure1_slot19;
                tangon = _closure1_slot5;
                zuuluu = {};
                golfie = 'link';
                zuuluu['accessibilityRole'] = golfie;
                oscard = function() { // Original name: onPress
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 16;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.handleClick;
                    entity = {};
                    tangon = _closure2_slot0;
                    entity['href'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu['onPress'] = oscard;
                zuuluu['children'] = michal;
                michal = undefined;
                entity = report.bind(michal)(tangon, zuuluu);
 71:
                return entity;
            }
        };
        var _closure1_slot24 = entity;
        entity = function(argFoo) { // Original name: ActivityCardBody
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                offset = entity.user;
                var _closure2_slot0 = offset;
                backup = entity.activity;
                var _closure2_slot1 = backup;
                oscard = entity.application;
                entity = entity.onAction;
                var _closure2_slot2 = entity;
                entity = _closure1_slot22;
                tangon = undefined;
                kiloes = entity.bind(tangon)();
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 17;
                entity = zuuluu[entity];
                report = michal.bind(tangon)(entity);
                entity = report.useImageForActivity;
                entity = entity.bind(report)(backup, oscard);
                source = entity.largeImage;
                cntext = entity.smallImage;
                entity = 18;
                entity = zuuluu[entity];
                michal = michal.bind(tangon)(entity);
                entity = michal.useThemeContext;
                entity = entity.bind(michal)();
                echoed = entity.theme;
                zuuluu = _closure1_slot20;
                michal = _closure1_slot7;
                entity = {};
                report = kiloes.body;
                entity['style'] = report;
                report = offset.bot;
                oscard = !report;
                if(!oscard) { _fun00008_ip = 995; continue _fun00007 }
 157:
                sequen = null;
                if(!(sequen != source)) { _fun00008_ip = 194; continue _fun00007 }
 163:
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                report = 19;
                report = option[report];
                report = golfie.bind(tangon)(report);
                report = report.bind(tangon)(backup);
                if(report) { _fun00008_ip = 765; continue _fun00007 }
 194:
                if(!(sequen == source)) { _fun00008_ip = 379; continue _fun00007 }
 201:
                option = _closure1_slot19;
                golfie = _closure1_slot7;
                report = {};
                foxtra = kiloes.imageContainer;
                verify = new Array(2);
                verify[0] = foxtra;
                foxtra = kiloes.imageAspectRatio;
                verify[1] = foxtra;
                report['style'] = verify;
                sizing = _closure1_slot19;
                result = _closure1_slot0;
                update = _closure1_slot2;
                verify = 24;
                verify = update[verify];
                verify = result.bind(tangon)(verify);
                foxtra = verify.UnknownGameIcon;
                verify = {};
                output = 'custom';
                verify['size'] = output;
                output = kiloes.largeImage;
                verify['style'] = output;
                output = 25;
                output = update[output];
                result = result.bind(tangon)(output);
                output = result.isThemeDark;
                output = output.bind(result)(echoed);
                echoed = _closure1_slot1;
                update = _closure1_slot2;
                result = 13;
                result = update[result];
                result = echoed.bind(tangon)(result);
                result = result.colors;
                if(output) { _fun00008_ip = 348; continue _fun00007 }
 340:
                output = result.BLACK;
                _fun00008_ip = 354; continue _fun00007;
 348:
                output = result.WHITE;
 354:
                verify['color'] = output;
                verify = sizing.bind(tangon)(foxtra, verify);
                report['children'] = verify;
                report = option.bind(tangon)(golfie, report);
                _fun00008_ip = 760; continue _fun00007;
 379:
                verify = _closure1_slot20;
                option = _closure1_slot7;
                golfie = {};
                sizing = kiloes.imageContainer;
                foxtra = new Array(2);
                foxtra[0] = sizing;
                output = _closure1_slot1;
                result = _closure1_slot2;
                sizing = 23;
                sizing = result[sizing];
                sizing = output.bind(tangon)(sizing);
                sizing = sizing.bind(tangon)(backup);
                if(sizing) { _fun00008_ip = 439; continue _fun00007 }
 431:
                sizing = kiloes.imageAspectRatio;
                _fun00008_ip = 445; continue _fun00007;
 439:
                sizing = kiloes.crunchyrollImageAspectRatio;
 445:
                foxtra[1] = sizing;
                golfie['style'] = foxtra;
                output = _closure1_slot19;
                sizing = _closure1_slot24;
                foxtra = {};
                echoed = backup.assets;
                update = sequen == echoed;
                result = undefined;
                if(update) { _fun00008_ip = 484; continue _fun00007 }
 478:
                result = echoed.large_url;
 484:
                foxtra['href'] = result;
                update = _closure1_slot19;
                echoed = _closure1_slot4;
                result = {};
                vacuum = _closure1_slot0;
                ctrled = _closure1_slot2;
                status = 22;
                ctrled = ctrled[status];
                config = vacuum.bind(tangon)(ctrled);
                vacuum = config.makeSource;
                ctrled = source.src;
                ctrled = vacuum.bind(config)(ctrled);
                result['source'] = ctrled;
                ctrled = source.alt;
                result['alt'] = ctrled;
                ctrled = kiloes.largeImage;
                result['style'] = ctrled;
                result = update.bind(tangon)(echoed, result);
                foxtra['children'] = result;
                sizing = output.bind(tangon)(sizing, foxtra);
                foxtra = new Array(2);
                foxtra[0] = sizing;
                sizing = sequen != cntext;
                if(!sizing) { _fun00008_ip = 746; continue _fun00007 }
 595:
                echoed = _closure1_slot19;
                result = _closure1_slot7;
                output = {};
                update = kiloes.smallImageBackground;
                output['style'] = update;
                vacuum = _closure1_slot19;
                ctrled = _closure1_slot24;
                update = {};
                config = backup.assets;
                record = sequen == config;
                sequen = undefined;
                if(record) { _fun00008_ip = 646; continue _fun00007 }
 640:
                sequen = config.small_url;
 646:
                update['href'] = sequen;
                record = _closure1_slot19;
                config = _closure1_slot4;
                sequen = {};
                target = _closure1_slot0;
                papara = _closure1_slot2;
                papara = papara[status];
                status = target.bind(tangon)(papara);
                target = status.makeSource;
                papara = cntext.src;
                papara = target.bind(status)(papara);
                sequen['source'] = papara;
                cntext = cntext.alt;
                sequen['alt'] = cntext;
                cntext = kiloes.smallImage;
                sequen['style'] = cntext;
                sequen = record.bind(tangon)(config, sequen);
                update['children'] = sequen;
                update = vacuum.bind(tangon)(ctrled, update);
                output['children'] = update;
                sizing = echoed.bind(tangon)(result, output);
 746:
                foxtra[1] = sizing;
                golfie['children'] = foxtra;
                report = verify.bind(tangon)(option, golfie);
 760:
                _fun00008_ip = 992; continue _fun00007;
 765:
                verify = _closure1_slot19;
                option = _closure1_slot6;
                golfie = {};
                foxtra = 'button';
                golfie['accessibilityRole'] = foxtra;
                foxtra = source.alt;
                golfie['accessibilityLabel'] = foxtra;
                vacuum = _closure1_slot0;
                sequen = _closure1_slot2;
                foxtra = 20;
                sizing = sequen[foxtra];
                sizing = vacuum.bind(tangon)(sizing);
                output = sizing.intl;
                sizing = output.string;
                foxtra = sequen[foxtra];
                foxtra = vacuum.bind(tangon)(foxtra);
                foxtra = foxtra.t;
                foxtra = foxtra.sjjOk5;
                foxtra = sizing.bind(output)(foxtra);
                golfie['accessibilityHint'] = foxtra;
                foxtra = function() { // Original name: onPress
                    tangon = _closure2_slot2;
                    zuuluu = {};
                    entity = 'OPEN_SPOTIFY_ALBUM';
                    zuuluu['action'] = entity;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 21;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.openAlbum;
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                golfie['onPress'] = foxtra;
                output = _closure1_slot19;
                sizing = _closure1_slot7;
                foxtra = {};
                echoed = kiloes.imageContainer;
                result = new Array(2);
                result[0] = echoed;
                echoed = kiloes.imageAspectRatio;
                result[1] = echoed;
                foxtra['style'] = result;
                update = _closure1_slot19;
                echoed = _closure1_slot4;
                result = {};
                ctrled = 22;
                ctrled = sequen[ctrled];
                sequen = vacuum.bind(tangon)(ctrled);
                vacuum = sequen.makeSource;
                ctrled = source.src;
                ctrled = vacuum.bind(sequen)(ctrled);
                result['source'] = ctrled;
                source = source.alt;
                result['alt'] = source;
                source = kiloes.largeImage;
                result['style'] = source;
                result = update.bind(tangon)(echoed, result);
                foxtra['children'] = result;
                foxtra = output.bind(tangon)(sizing, foxtra);
                golfie['children'] = foxtra;
                report = verify.bind(tangon)(option, golfie);
 992:
                oscard = report;
 995:
                report = new Array(2);
                report[0] = oscard;
                option = _closure1_slot20;
                golfie = _closure1_slot7;
                oscard = {};
                verify = kiloes.content;
                oscard['style'] = verify;
                foxtra = _closure1_slot1;
                verify = _closure1_slot2;
                sizing = 19;
                verify = verify[sizing];
                verify = foxtra.bind(tangon)(verify);
                verify = verify.bind(tangon)(backup);
                result = _closure1_slot19;
                if(verify) { _fun00008_ip = 1163; continue _fun00007 }
 1054:
                foxtra = _closure1_slot24;
                verify = {};
                output = backup.details_url;
                verify['href'] = output;
                update = _closure1_slot19;
                echoed = _closure1_slot23;
                output = {};
                source = 'text-md/semibold';
                output['variant'] = source;
                ctrled = _closure1_slot1;
                vacuum = _closure1_slot2;
                source = 26;
                source = vacuum[source];
                source = ctrled.bind(tangon)(source);
                source = source.bind(tangon)(backup);
                if(source) { _fun00008_ip = 1136; continue _fun00007 }
 1117:
                source = backup.details;
                ctrled = null;
                if(!(ctrled == source)) { _fun00008_ip = 1134; continue _fun00007 }
 1129:
                source = backup.name;
 1134:
                _fun00008_ip = 1141; continue _fun00007;
 1136:
                source = backup.name;
 1141:
                output['children'] = source;
                output = update.bind(tangon)(echoed, output);
                verify['children'] = output;
                foxtra = result.bind(tangon)(foxtra, verify);
                _fun00008_ip = 1249; continue _fun00007;
 1163:
                output = _closure1_slot23;
                verify = {};
                echoed = 'text-md/semibold';
                verify['variant'] = echoed;
                source = _closure1_slot19;
                update = _closure1_slot0;
                ctrled = _closure1_slot2;
                echoed = 21;
                echoed = ctrled[echoed];
                echoed = update.bind(tangon)(echoed);
                update = echoed.SpotifyTrack;
                echoed = {};
                ctrled = backup.details;
                echoed['text'] = ctrled;
                echoed['activity'] = backup;
                ctrled = function() { // Original name: onPress
                    zuuluu = _closure2_slot2;
                    michal = {};
                    entity = 'OPEN_SPOTIFY_TRACK';
                    michal['action'] = entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                echoed['onPress'] = ctrled;
                echoed = source.bind(tangon)(update, echoed);
                verify['children'] = echoed;
                foxtra = result.bind(tangon)(output, verify);
 1249:
                verify = new Array(4);
                verify[0] = foxtra;
                romeon = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 19;
                        entity = zuuluu[entity];
                        report = undefined;
                        michal = michal.bind(report)(entity);
                        entity = _closure2_slot1;
                        entity = michal.bind(report)(entity);
                        if(entity) { _fun00010_ip = 173; continue _fun00009 }
 43:
                        zuuluu = _closure1_slot19;
                        michal = _closure1_slot24;
                        entity = {};
                        yankee = _closure2_slot1;
                        tangon = yankee.state_url;
                        entity['href'] = tangon;
                        option = _closure1_slot19;
                        golfie = _closure1_slot23;
                        tangon = {'variant': 'text-xs/medium', 'lineClamp': 1};
                        romeon = _closure1_slot1;
                        foxtra = _closure1_slot2;
                        offset = 26;
                        offset = foxtra[offset];
                        offset = romeon.bind(report)(offset);
                        offset = offset.bind(report)(yankee);
                        yankee = _closure2_slot1;
                        if(offset) { _fun00010_ip = 145; continue _fun00009 }
 122:
                        offset = yankee.state;
                        romeon = null;
                        if(!(romeon == offset)) { _fun00010_ip = 143; continue _fun00009 }
 133:
                        romeon = _closure2_slot1;
                        offset = romeon.details;
 143:
                        _fun00010_ip = 151; continue _fun00009;
 145:
                        offset = yankee.details;
 151:
                        tangon['children'] = offset;
                        tangon = option.bind(report)(golfie, tangon);
                        entity['children'] = tangon;
                        entity = zuuluu.bind(report)(michal, entity);
                        return entity;
 173:
                        entity = _closure2_slot1;
                        michal = entity.state;
                        zuuluu = null;
                        entity = zuuluu == michal;
                        offset = undefined;
                        if(entity) { _fun00010_ip = 203; continue _fun00009 }
 193:
                        entity = michal.trim;
                        offset = entity.bind(michal)();
 203:
                        michal = zuuluu == offset;
                        entity = null;
                        if(michal) { _fun00010_ip = 330; continue _fun00009 }
 212:
                        michal = '';
                        entity = null;
                        if(!(michal !== offset)) { _fun00010_ip = 330; continue _fun00009 }
 222:
                        tangon = _closure1_slot19;
                        zuuluu = _closure1_slot23;
                        michal = {'variant': 'text-xs/medium', 'lineClamp': 1};
                        option = _closure1_slot19;
                        golfie = _closure1_slot0;
                        yankee = _closure1_slot2;
                        oscard = 21;
                        oscard = yankee[oscard];
                        oscard = golfie.bind(report)(oscard);
                        golfie = oscard.SpotifyArtists;
                        oscard = {};
                        oscard['artists'] = offset;
                        offset = _closure2_slot1;
                        oscard['activity'] = offset;
                        verify = _closure2_slot0;
                        verify = verify.id;
                        oscard['userId'] = verify;
                        verify = function() { // Original name: onPress
                            zuuluu = _closure2_slot2;
                            michal = {};
                            entity = 'OPEN_SPOTIFY_ARTIST';
                            michal['action'] = entity;
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        oscard['onPress'] = verify;
                        oscard = option.bind(report)(golfie, oscard);
                        michal['children'] = oscard;
                        entity = tangon.bind(report)(zuuluu, michal);
 330:
                        return entity;
                    }
                };
                romeon = romeon.bind(tangon)();
                verify[1] = romeon;
                foxtra = _closure1_slot1;
                romeon = _closure1_slot2;
                romeon = romeon[sizing];
                romeon = foxtra.bind(tangon)(romeon);
                foxtra = romeon.bind(tangon)(backup);
                sizing = null;
                romeon = null;
                if(foxtra) { _fun00008_ip = 1858; continue _fun00007 }
 1302:
                output = backup.type;
                foxtra = _closure1_slot15;
                foxtra = foxtra.WATCHING;
                romeon = null;
                if(!(output !== foxtra)) { _fun00008_ip = 1858; continue _fun00007 }
 1326:
                output = _closure1_slot1;
                foxtra = _closure1_slot2;
                result = 26;
                foxtra = foxtra[result];
                foxtra = output.bind(tangon)(foxtra);
                foxtra = foxtra.bind(tangon)(backup);
                if(!foxtra) { _fun00008_ip = 1400; continue _fun00007 }
 1354:
                output = _closure1_slot1;
                echoed = _closure1_slot2;
                foxtra = 27;
                foxtra = echoed[foxtra];
                foxtra = output.bind(tangon)(foxtra);
                foxtra = foxtra.bind(tangon)(backup);
                if(foxtra) { _fun00008_ip = 1400; continue _fun00007 }
 1382:
                foxtra = backup.party;
                foxtra = sizing != foxtra;
                romeon = null;
                if(foxtra) { _fun00008_ip = 1858; continue _fun00007 }
 1400:
                output = _closure1_slot1;
                foxtra = _closure1_slot2;
                foxtra = foxtra[result];
                foxtra = output.bind(tangon)(foxtra);
                foxtra = foxtra.bind(tangon)(backup);
                if(foxtra) { _fun00008_ip = 1529; continue _fun00007 }
 1425:
                result = _closure1_slot19;
                output = _closure1_slot24;
                foxtra = {};
                update = backup.assets;
                source = sizing == update;
                echoed = undefined;
                if(source) { _fun00008_ip = 1456; continue _fun00007 }
 1450:
                echoed = update.large_url;
 1456:
                foxtra['href'] = echoed;
                source = _closure1_slot19;
                update = _closure1_slot23;
                echoed = {'variant': 'text-xs/medium', 'lineClamp': 1};
                vacuum = backup.assets;
                sequen = sizing == vacuum;
                ctrled = undefined;
                if(sequen) { _fun00008_ip = 1504; continue _fun00007 }
 1498:
                ctrled = vacuum.large_text;
 1504:
                echoed['children'] = ctrled;
                echoed = source.bind(tangon)(update, echoed);
                foxtra['children'] = echoed;
                romeon = result.bind(tangon)(output, foxtra);
                _fun00008_ip = 1858; continue _fun00007;
 1529:
                output = backup.party;
                result = sizing == output;
                foxtra = undefined;
                if(result) { _fun00008_ip = 1549; continue _fun00007 }
 1544:
                foxtra = output.size;
 1549:
                foxtra = sizing != foxtra;
                if(!foxtra) { _fun00008_ip = 1579; continue _fun00007 }
 1556:
                sizing = backup.party;
                sizing = sizing.size;
                output = sizing.length;
                sizing = 2;
                foxtra = output >= sizing;
 1579:
                result = '';
                if(!foxtra) { _fun00008_ip = 1795; continue _fun00007 }
 1589:
                foxtra = backup.party;
                foxtra = foxtra.size;
                source = 1;
                foxtra = foxtra[source];
                ctrled = 0;
                if(!(ctrled !== foxtra)) { _fun00008_ip = 1713; continue _fun00007 }
 1613:
                sizing = _closure1_slot0;
                update = _closure1_slot2;
                foxtra = 20;
                output = update[foxtra];
                output = sizing.bind(tangon)(output);
                echoed = output.intl;
                output = echoed.formatToPlainString;
                foxtra = update[foxtra];
                foxtra = sizing.bind(tangon)(foxtra);
                foxtra = foxtra.t;
                sizing = foxtra.u//9Bw;
                foxtra = {};
                update = backup.party;
                update = update.size;
                update = update[ctrled];
                foxtra['count'] = update;
                update = backup.party;
                update = update.size;
                update = update[source];
                foxtra['max'] = update;
                foxtra = output.bind(echoed)(sizing, foxtra);
                _fun00008_ip = 1792; continue _fun00007;
 1713:
                output = _closure1_slot0;
                source = _closure1_slot2;
                sizing = 20;
                echoed = source[sizing];
                echoed = output.bind(tangon)(echoed);
                update = echoed.intl;
                echoed = update.formatToPlainString;
                sizing = source[sizing];
                sizing = output.bind(tangon)(sizing);
                sizing = sizing.t;
                output = sizing.IM4J4e;
                sizing = {};
                source = backup.party;
                source = source.size;
                source = source[ctrled];
                sizing['count'] = source;
                foxtra = echoed.bind(update)(output, sizing);
 1792:
                result = foxtra;
 1795:
                output = _closure1_slot19;
                sizing = _closure1_slot23;
                foxtra = {'variant': 'text-xs/medium', 'lineClamp': 1};
                echoed = backup.state;
                update = new Array(2);
                update[0] = echoed;
                update[1] = result;
                echoed = update.join;
                result = ' ';
                result = echoed.bind(update)(result);
                foxtra['children'] = result;
                romeon = output.bind(tangon)(sizing, foxtra);
 1858:
                verify[2] = romeon;
                offset = offset.bot;
                offset = !offset;
                if(!offset) { _fun00008_ip = 1921; continue _fun00007 }
 1874:
                foxtra = _closure1_slot19;
                romeon = _closure1_slot1;
                sizing = _closure1_slot2;
                yankee = 28;
                yankee = sizing[yankee];
                romeon = romeon.bind(tangon)(yankee);
                yankee = {};
                kiloes = kiloes.badges;
                yankee['style'] = kiloes;
                yankee['activity'] = backup;
                offset = foxtra.bind(tangon)(romeon, yankee);
 1921:
                verify[3] = offset;
                oscard['children'] = verify;
                oscard = option.bind(tangon)(golfie, oscard);
                report[1] = oscard;
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        var _closure1_slot25 = entity;
        entity = function(argFoo) { // Original name: ActivityCard
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                update = entity.user;
                var _closure2_slot0 = update;
                echoed = entity.currentUser;
                output = entity.activity;
                var _closure2_slot1 = output;
                vacuum = entity.voiceChannel;
                offset = entity.style;
                report = undefined;
                var _closure2_slot2 = report;
                entity = _closure1_slot22;
                ctrled = entity.bind(report)();
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 29;
                entity = tangon[entity];
                entity = zuuluu.bind(report)(entity);
                sizing = entity.bind(report)(output);
                michal = 30;
                entity = tangon[michal];
                oscard = zuuluu.bind(report)(entity);
                entity = 31;
                entity = tangon[entity];
                entity = zuuluu.bind(report)(entity);
                entity = entity.USER_PROFILE_LIVE_ACTIVITY_CARD;
                entity = oscard.bind(report)(entity);
                oscard = entity.analyticsLocations;
                entity = 32;
                entity = tangon[entity];
                zuuluu = zuuluu.bind(report)(entity);
                entity = {};
                tangon = 'live';
                entity['display'] = tangon;
                foxtra = null;
                golfie = foxtra == vacuum;
                tangon = undefined;
                if(golfie) { _fun00012_ip = 162; continue _fun00011 }
 157:
                tangon = vacuum.id;
 162:
                entity['voiceChannelId'] = tangon;
                entity['user'] = update;
                entity['activity'] = output;
                entity['analyticsLocations'] = oscard;
                backup = zuuluu.bind(report)(entity);
                _closure2_slot2 = backup;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 33;
                entity = tangon[entity];
                zuuluu = zuuluu.bind(report)(entity);
                entity = {};
                golfie = update.id;
                entity['userId'] = golfie;
                entity['onAction'] = backup;
                entity = zuuluu.bind(report)(entity);
                zuuluu = _closure1_slot0;
                entity = 34;
                golfie = tangon[entity];
                yankee = zuuluu.bind(report)(golfie);
                verify = yankee.useStateFromStores;
                golfie = _closure1_slot10;
                option = new Array(3);
                option[0] = golfie;
                golfie = _closure1_slot14;
                option[1] = golfie;
                golfie = _closure1_slot9;
                option[2] = golfie;
                golfie = function() {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 27;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = _closure2_slot1;
                        michal = zuuluu.bind(entity)(michal);
                        if(michal) { _fun00014_ip = 44; continue _fun00013 }
 40:
                        michal = null;
                        return michal;
 44:
                        golfie = _closure1_slot14;
                        oscard = golfie.getVoiceStateForSession;
                        michal = _closure2_slot0;
                        zuuluu = michal.id;
                        michal = _closure2_slot1;
                        tangon = null;
                        verify = tangon == michal;
                        michal = undefined;
                        if(verify) { _fun00014_ip = 88; continue _fun00013 }
 78:
                        option = _closure2_slot1;
                        michal = option.session_id;
 88:
                        michal = oscard.bind(golfie)(zuuluu, michal);
                        zuuluu = tangon == michal;
                        golfie = undefined;
                        if(zuuluu) { _fun00014_ip = 108; continue _fun00013 }
 103:
                        golfie = michal.channelId;
 108:
                        zuuluu = _closure1_slot10;
                        michal = zuuluu.getGuild;
                        oscard = _closure1_slot9;
                        report = oscard.getChannel;
                        report = report.bind(oscard)(golfie);
                        tangon = tangon == report;
                        entity = undefined;
                        if(tangon) { _fun00014_ip = 150; continue _fun00013 }
 140:
                        tangon = report.getGuildId;
                        entity = tangon.bind(report)();
 150:
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    }
                };
                sequen = verify.bind(yankee)(option, golfie);
                entity = tangon[entity];
                golfie = zuuluu.bind(report)(entity);
                tangon = golfie.useStateFromStores;
                entity = _closure1_slot8;
                zuuluu = new Array(1);
                zuuluu[0] = entity;
                entity = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        entity = _closure2_slot1;
                        zuuluu = entity.application_id;
                        entity = null;
                        if(!(entity == zuuluu)) { _fun00016_ip = 66; continue _fun00015 }
 19:
                        zuuluu = _closure2_slot1;
                        zuuluu = zuuluu.name;
                        zuuluu = entity != zuuluu;
                        entity = null;
                        if(!zuuluu) { _fun00016_ip = 64; continue _fun00015 }
 37:
                        report = _closure1_slot8;
                        tangon = report.getApplicationByName;
                        zuuluu = _closure2_slot1;
                        zuuluu = zuuluu.name;
                        entity = tangon.bind(report)(zuuluu);
 64:
                        _fun00016_ip = 94; continue _fun00015;
 66:
                        tangon = _closure1_slot8;
                        zuuluu = tangon.getApplication;
                        michal = _closure2_slot1;
                        michal = michal.application_id;
                        entity = zuuluu.bind(tangon)(michal);
 94:
                        return entity;
                    }
                };
                result = tangon.bind(golfie)(zuuluu, entity);
                tangon = output.type;
                entity = _closure1_slot15;
                zuuluu = entity.CUSTOM_STATUS;
                entity = null;
                if(!(tangon !== zuuluu)) { _fun00012_ip = 1404; continue _fun00011 }
 352:
                tangon = output.type;
                zuuluu = _closure1_slot15;
                zuuluu = zuuluu.HANG_STATUS;
                entity = null;
                if(!(tangon !== zuuluu)) { _fun00012_ip = 1404; continue _fun00011 }
 376:
                tangon = _closure1_slot19;
                zuuluu = _closure1_slot0;
                verify = _closure1_slot2;
                michal = verify[michal];
                michal = zuuluu.bind(report)(michal);
                zuuluu = michal.AnalyticsLocationProvider;
                michal = {};
                michal['value'] = oscard;
                option = _closure1_slot20;
                golfie = _closure1_slot1;
                oscard = 35;
                oscard = verify[oscard];
                golfie = golfie.bind(report)(oscard);
                oscard = {};
                yankee = ctrled.card;
                verify = new Array(2);
                verify[0] = yankee;
                verify[1] = offset;
                oscard['style'] = verify;
                verify = sizing.text;
                oscard['title'] = verify;
                verify = ctrled.cardTitle;
                oscard['titleStyle'] = verify;
                verify = sizing.platformIcon;
                verify = foxtra != verify;
                if(!verify) { _fun00012_ip = 623; continue _fun00011 }
 489:
                romeon = _closure1_slot19;
                yankee = _closure1_slot1;
                papara = _closure1_slot2;
                record = 36;
                offset = papara[record];
                yankee = yankee.bind(report)(offset);
                offset = {};
                config = ctrled.cardTitleIcon;
                offset['style'] = config;
                cntext = _closure1_slot0;
                config = 22;
                config = papara[config];
                cntext = cntext.bind(report)(config);
                config = cntext.makeSource;
                papara = sizing.platformIcon;
                target = foxtra == papara;
                sizing = undefined;
                if(target) { _fun00012_ip = 568; continue _fun00011 }
 562:
                sizing = papara.whitePNG;
 568:
                sizing = config.bind(cntext)(sizing);
                offset['source'] = sizing;
                config = _closure1_slot0;
                sizing = _closure1_slot2;
                sizing = sizing[record];
                sizing = config.bind(report)(sizing);
                sizing = sizing.IconSizes;
                sizing = sizing.SMALL_14;
                offset['size'] = sizing;
                sizing = true;
                offset['disableColor'] = sizing;
                verify = romeon.bind(report)(yankee, offset);
 623:
                oscard['titleIcon'] = verify;
                yankee = _closure1_slot19;
                offset = _closure1_slot25;
                verify = {};
                verify['user'] = update;
                verify['activity'] = output;
                verify['application'] = result;
                verify['onAction'] = backup;
                offset = yankee.bind(report)(offset, verify);
                verify = new Array(4);
                verify[0] = offset;
                yankee = _closure1_slot1;
                romeon = _closure1_slot2;
                offset = 37;
                offset = romeon[offset];
                offset = yankee.bind(report)(offset);
                yankee = offset.bind(report)(output);
                offset = null;
                if(!yankee) { _fun00012_ip = 756; continue _fun00011 }
 700:
                yankee = output.timestamps;
                record = yankee.start;
                config = yankee.end;
                sizing = _closure1_slot19;
                romeon = _closure1_slot1;
                cntext = _closure1_slot2;
                yankee = 38;
                yankee = cntext[yankee];
                romeon = romeon.bind(report)(yankee);
                yankee = {};
                yankee['start'] = record;
                yankee['end'] = config;
                offset = sizing.bind(report)(romeon, yankee);
 756:
                verify[1] = offset;
                yankee = foxtra == vacuum;
                offset = null;
                if(yankee) { _fun00012_ip = 833; continue _fun00011 }
 769:
                yankee = foxtra == sequen;
                offset = null;
                if(yankee) { _fun00012_ip = 833; continue _fun00011 }
 778:
                sizing = _closure1_slot19;
                romeon = _closure1_slot1;
                config = _closure1_slot2;
                yankee = 39;
                yankee = config[yankee];
                romeon = romeon.bind(report)(yankee);
                yankee = {};
                yankee['guild'] = sequen;
                yankee['channel'] = vacuum;
                yankee['onAction'] = backup;
                vacuum = ctrled.voiceChannelDivider;
                yankee['style'] = vacuum;
                offset = sizing.bind(report)(romeon, yankee);
 833:
                verify[2] = offset;
                yankee = _closure1_slot1;
                romeon = _closure1_slot2;
                offset = 40;
                offset = romeon[offset];
                offset = yankee.bind(report)(offset);
                offset = offset.bind(report)(output);
                if(offset) { _fun00012_ip = 1323; continue _fun00011 }
 868:
                yankee = _closure1_slot1;
                romeon = _closure1_slot2;
                offset = 42;
                offset = romeon[offset];
                offset = yankee.bind(report)(offset);
                offset = offset.bind(report)(output);
                if(offset) { _fun00012_ip = 1264; continue _fun00011 }
 899:
                romeon = update.id;
                yankee = echoed.id;
                offset = null;
                if(!(romeon !== yankee)) { _fun00012_ip = 1262; continue _fun00011 }
 918:
                romeon = _closure1_slot1;
                sizing = _closure1_slot2;
                yankee = 19;
                yankee = sizing[yankee];
                yankee = romeon.bind(report)(yankee);
                yankee = yankee.bind(report)(output);
                if(yankee) { _fun00012_ip = 1211; continue _fun00011 }
 949:
                romeon = _closure1_slot1;
                sizing = _closure1_slot2;
                yankee = 27;
                yankee = sizing[yankee];
                yankee = romeon.bind(report)(yankee);
                yankee = yankee.bind(report)(output);
                if(yankee) { _fun00012_ip = 1148; continue _fun00011 }
 980:
                romeon = _closure1_slot1;
                sizing = _closure1_slot2;
                yankee = 43;
                yankee = sizing[yankee];
                yankee = romeon.bind(report)(yankee);
                yankee = yankee.bind(report)(output);
                if(yankee) { _fun00012_ip = 1098; continue _fun00011 }
 1008:
                yankee = output.buttons;
                romeon = foxtra != yankee;
                yankee = null;
                if(!romeon) { _fun00012_ip = 1096; continue _fun00011 }
 1023:
                romeon = output.buttons;
                sizing = romeon.length;
                romeon = 0;
                romeon = sizing > romeon;
                yankee = null;
                if(!romeon) { _fun00012_ip = 1096; continue _fun00011 }
 1045:
                sizing = _closure1_slot19;
                foxtra = _closure1_slot7;
                romeon = {};
                ctrled = ctrled.customButtons;
                romeon['style'] = ctrled;
                vacuum = output.buttons;
                ctrled = vacuum.map;
                source = function(argFoo, argBar) {
                    report = argBar;
                    tangon = _closure1_slot19;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 41;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.CustomActivityButton;
                    entity = {};
                    entity['index'] = report;
                    golfie = _closure2_slot0;
                    entity['user'] = golfie;
                    golfie = _closure2_slot1;
                    entity['activity'] = golfie;
                    oscard = _closure2_slot2;
                    entity['onAction'] = oscard;
                    entity = tangon.bind(zuuluu)(michal, entity, report);
                    return entity;
                };
                source = ctrled.bind(vacuum)(source);
                romeon['children'] = source;
                yankee = sizing.bind(report)(foxtra, romeon);
 1096:
                _fun00012_ip = 1146; continue _fun00011;
 1098:
                sizing = _closure1_slot19;
                foxtra = _closure1_slot0;
                source = _closure1_slot2;
                romeon = 41;
                romeon = source[romeon];
                romeon = foxtra.bind(report)(romeon);
                foxtra = romeon.WatchActivityButton;
                romeon = {};
                romeon['activity'] = output;
                romeon['onAction'] = backup;
                yankee = sizing.bind(report)(foxtra, romeon);
 1146:
                _fun00012_ip = 1209; continue _fun00011;
 1148:
                sizing = _closure1_slot19;
                foxtra = _closure1_slot0;
                source = _closure1_slot2;
                romeon = 41;
                romeon = source[romeon];
                romeon = foxtra.bind(report)(romeon);
                foxtra = romeon.JoinActivityButton;
                romeon = {};
                romeon['user'] = update;
                romeon['currentUser'] = echoed;
                romeon['activity'] = output;
                romeon['application'] = result;
                romeon['onAction'] = backup;
                yankee = sizing.bind(report)(foxtra, romeon);
 1209:
                _fun00012_ip = 1259; continue _fun00011;
 1211:
                sizing = _closure1_slot19;
                foxtra = _closure1_slot0;
                result = _closure1_slot2;
                romeon = 41;
                romeon = result[romeon];
                romeon = foxtra.bind(report)(romeon);
                foxtra = romeon.PlayOnSpotifyButton;
                romeon = {};
                romeon['activity'] = output;
                romeon['onAction'] = backup;
                yankee = sizing.bind(report)(foxtra, romeon);
 1259:
                offset = yankee;
 1262:
                _fun00012_ip = 1321; continue _fun00011;
 1264:
                foxtra = _closure1_slot19;
                romeon = _closure1_slot0;
                sizing = _closure1_slot2;
                yankee = 41;
                yankee = sizing[yankee];
                yankee = romeon.bind(report)(yankee);
                romeon = yankee.ConnectPlatformButton;
                yankee = {};
                sizing = _closure1_slot17;
                sizing = sizing.PLAYSTATION;
                yankee['type'] = sizing;
                yankee['onAction'] = backup;
                offset = foxtra.bind(report)(romeon, yankee);
 1321:
                _fun00012_ip = 1380; continue _fun00011;
 1323:
                foxtra = _closure1_slot19;
                romeon = _closure1_slot0;
                sizing = _closure1_slot2;
                yankee = 41;
                yankee = sizing[yankee];
                yankee = romeon.bind(report)(yankee);
                romeon = yankee.ConnectPlatformButton;
                yankee = {};
                kiloes = _closure1_slot17;
                kiloes = kiloes.XBOX;
                yankee['type'] = kiloes;
                yankee['onAction'] = backup;
                offset = foxtra.bind(report)(romeon, yankee);
 1380:
                verify[3] = offset;
                oscard['children'] = verify;
                oscard = option.bind(report)(golfie, oscard);
                michal['children'] = oscard;
                entity = tangon.bind(report)(zuuluu, michal);
 1404:
                return entity;
            }
        };
        var _closure1_slot26 = entity;
        entity = function(argFoo) { // Original name: StreamActivityCard
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                ctrled = entity.user;
                var _closure2_slot0 = ctrled;
                record = entity.stream;
                var _closure2_slot1 = record;
                source = entity.activity;
                var _closure2_slot2 = source;
                yankee = entity.style;
                tangon = undefined;
                var _closure2_slot4 = tangon;
                entity = _closure1_slot22;
                result = entity.bind(tangon)();
                michal = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 34;
                zuuluu = oscard[entity];
                option = michal.bind(tangon)(zuuluu);
                golfie = option.useStateFromStores;
                zuuluu = _closure1_slot9;
                report = new Array(1);
                report[0] = zuuluu;
                zuuluu = function() {
                    zuuluu = _closure1_slot9;
                    michal = zuuluu.getChannel;
                    entity = _closure2_slot1;
                    entity = entity.channelId;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                kiloes = golfie.bind(option)(report, zuuluu);
                var _closure2_slot3 = kiloes;
                zuuluu = oscard[entity];
                option = michal.bind(tangon)(zuuluu);
                golfie = option.useStateFromStores;
                zuuluu = _closure1_slot14;
                report = new Array(1);
                report[0] = zuuluu;
                zuuluu = function() {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        zuuluu = _closure1_slot14;
                        michal = zuuluu.isInChannel;
                        report = _closure2_slot3;
                        entity = null;
                        report = entity == report;
                        entity = undefined;
                        if(report) { _fun00020_ip = 40; continue _fun00019 }
 31:
                        tangon = _closure2_slot3;
                        entity = tangon.id;
 40:
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    }
                };
                backup = golfie.bind(option)(report, zuuluu);
                zuuluu = oscard[entity];
                option = michal.bind(tangon)(zuuluu);
                golfie = option.useStateFromStores;
                zuuluu = _closure1_slot10;
                report = new Array(1);
                report[0] = zuuluu;
                zuuluu = function() {
                    zuuluu = _closure1_slot10;
                    michal = zuuluu.getGuild;
                    entity = _closure2_slot1;
                    entity = entity.guildId;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                echoed = golfie.bind(option)(report, zuuluu);
                zuuluu = oscard[entity];
                option = michal.bind(tangon)(zuuluu);
                golfie = option.useStateFromStores;
                zuuluu = _closure1_slot12;
                report = new Array(1);
                report[0] = zuuluu;
                zuuluu = function() {
                    tangon = _closure1_slot12;
                    zuuluu = tangon.findActivity;
                    entity = _closure2_slot0;
                    michal = entity.id;
                    entity = function(argFoo) {
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            tangon = argFoo;
                            report = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            entity = 26;
                            entity = zuuluu[entity];
                            zuuluu = undefined;
                            entity = report.bind(zuuluu)(entity);
                            entity = entity.bind(zuuluu)(tangon);
                            if(!entity) { _fun00022_ip = 64; continue _fun00021 }
 36:
                            report = _closure1_slot1;
                            oscard = _closure1_slot2;
                            michal = 44;
                            michal = oscard[michal];
                            michal = report.bind(zuuluu)(michal);
                            michal = michal.bind(zuuluu)(tangon);
                            entity = !michal;
 64:
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                vacuum = golfie.bind(option)(report, zuuluu);
                entity = oscard[entity];
                golfie = michal.bind(tangon)(entity);
                report = golfie.useStateFromStores;
                entity = _closure1_slot8;
                zuuluu = new Array(1);
                zuuluu[0] = entity;
                entity = function() {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        zuuluu = _closure2_slot2;
                        entity = null;
                        report = entity == zuuluu;
                        tangon = undefined;
                        if(report) { _fun00024_ip = 28; continue _fun00023 }
 18:
                        report = _closure2_slot2;
                        tangon = report.application_id;
 28:
                        if(!(entity == tangon)) { _fun00024_ip = 92; continue _fun00023 }
 32:
                        tangon = _closure2_slot2;
                        tangon = entity == tangon;
                        zuuluu = undefined;
                        if(tangon) { _fun00024_ip = 54; continue _fun00023 }
 45:
                        tangon = _closure2_slot2;
                        zuuluu = tangon.name;
 54:
                        zuuluu = entity != zuuluu;
                        entity = null;
                        if(!zuuluu) { _fun00024_ip = 90; continue _fun00023 }
 63:
                        report = _closure1_slot8;
                        tangon = report.getApplicationByName;
                        zuuluu = _closure2_slot2;
                        zuuluu = zuuluu.name;
                        entity = tangon.bind(report)(zuuluu);
 90:
                        _fun00024_ip = 120; continue _fun00023;
 92:
                        tangon = _closure1_slot8;
                        zuuluu = tangon.getApplication;
                        michal = _closure2_slot2;
                        michal = michal.application_id;
                        entity = zuuluu.bind(tangon)(michal);
 120:
                        return entity;
                    }
                };
                update = report.bind(golfie)(zuuluu, entity);
                entity = 45;
                entity = oscard[entity];
                michal = michal.bind(tangon)(entity);
                entity = michal.useCanWatchStream;
                zuuluu = entity.bind(michal)(kiloes);
                michal = _closure1_slot3;
                entity = 1;
                michal = michal.bind(tangon)(zuuluu, entity);
                entity = 0;
                config = michal[entity];
                zuuluu = _closure1_slot1;
                entity = 30;
                michal = oscard[entity];
                report = zuuluu.bind(tangon)(michal);
                michal = 31;
                michal = oscard[michal];
                michal = zuuluu.bind(tangon)(michal);
                michal = michal.USER_PROFILE_LIVE_ACTIVITY_CARD;
                michal = report.bind(tangon)(michal);
                report = michal.analyticsLocations;
                michal = 32;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = {};
                oscard = 'live';
                michal['display'] = oscard;
                verify = null;
                golfie = verify == kiloes;
                oscard = undefined;
                if(golfie) { _fun00018_ip = 381; continue _fun00017 }
 376:
                oscard = kiloes.id;
 381:
                michal['voiceChannelId'] = oscard;
                michal['user'] = ctrled;
                michal['stream'] = record;
                michal['analyticsLocations'] = report;
                foxtra = zuuluu.bind(tangon)(michal);
                _closure2_slot4 = foxtra;
                oscard = _closure1_slot1;
                option = _closure1_slot2;
                michal = 33;
                michal = option[michal];
                zuuluu = oscard.bind(tangon)(michal);
                michal = {};
                golfie = ctrled.id;
                michal['userId'] = golfie;
                michal['onAction'] = foxtra;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = _closure1_slot19;
                michal = _closure1_slot0;
                entity = option[entity];
                entity = michal.bind(tangon)(entity);
                michal = entity.AnalyticsLocationProvider;
                entity = {};
                entity['value'] = report;
                golfie = _closure1_slot20;
                report = 35;
                report = option[report];
                oscard = oscard.bind(tangon)(report);
                report = {};
                romeon = result.card;
                option = new Array(2);
                option[0] = romeon;
                option[1] = yankee;
                report['style'] = option;
                if(!(verify == vacuum)) { _fun00018_ip = 580; continue _fun00017 }
 523:
                sizing = _closure1_slot0;
                output = _closure1_slot2;
                option = 20;
                yankee = output[option];
                yankee = sizing.bind(tangon)(yankee);
                romeon = yankee.intl;
                yankee = romeon.string;
                option = output[option];
                option = sizing.bind(tangon)(option);
                option = option.t;
                option = option.Jpkr/v;
                option = yankee.bind(romeon)(option);
                _fun00018_ip = 647; continue _fun00017;
 580:
                romeon = _closure1_slot0;
                cntext = _closure1_slot2;
                yankee = 20;
                sizing = cntext[yankee];
                sizing = romeon.bind(tangon)(sizing);
                output = sizing.intl;
                sizing = output.formatToPlainString;
                yankee = cntext[yankee];
                yankee = romeon.bind(tangon)(yankee);
                yankee = yankee.t;
                romeon = yankee.4CQq9f;
                yankee = {};
                vacuum = vacuum.name;
                yankee['name'] = vacuum;
                option = sizing.bind(output)(romeon, yankee);
 647:
                report['title'] = option;
                option = result.cardTitle;
                report['titleStyle'] = option;
                romeon = _closure1_slot19;
                yankee = _closure1_slot7;
                option = {};
                sizing = result.liveIndicator;
                option['style'] = sizing;
                papara = _closure1_slot19;
                output = _closure1_slot0;
                cntext = _closure1_slot2;
                sizing = 15;
                sizing = cntext[sizing];
                sizing = output.bind(tangon)(sizing);
                vacuum = sizing.Text;
                sizing = {'variant': 'eyebrow', 'color': 'always-white'};
                target = result.liveIndicatorText;
                sizing['style'] = target;
                target = 20;
                status = cntext[target];
                status = output.bind(tangon)(status);
                sierra = status.intl;
                status = sierra.string;
                target = cntext[target];
                target = output.bind(tangon)(target);
                target = target.t;
                target = target.dI3q4u;
                target = status.bind(sierra)(target);
                sizing['children'] = target;
                sizing = papara.bind(tangon)(vacuum, sizing);
                option['children'] = sizing;
                option = romeon.bind(tangon)(yankee, option);
                report['titleIcon'] = option;
                romeon = _closure1_slot19;
                yankee = _closure1_slot7;
                option = {};
                sizing = result.streamPreview;
                option['style'] = sizing;
                vacuum = _closure1_slot19;
                sizing = 46;
                sizing = cntext[sizing];
                sizing = output.bind(tangon)(sizing);
                output = sizing.VoicePanelStreamPreview;
                sizing = {};
                sizing['mode'] = tangon;
                sizing['stream'] = record;
                config = !config;
                sizing['disabled'] = config;
                sequen = function() { // Original name: onPress
                    zuuluu = _closure2_slot4;
                    michal = {};
                    entity = 'PRESS_IMAGE';
                    michal['action'] = entity;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    oscard = 47;
                    oscard = tangon[oscard];
                    option = zuuluu.bind(entity)(oscard);
                    golfie = option.selectVoiceChannel;
                    oscard = _closure2_slot1;
                    report = oscard.channelId;
                    report = golfie.bind(option)(report);
                    report = _closure1_slot0;
                    michal = 48;
                    michal = tangon[michal];
                    report = report.bind(entity)(michal);
                    michal = report.watchStreamAndTransitionToStream;
                    michal = michal.bind(report)(oscard);
                    michal = 49;
                    michal = tangon[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.hideActionSheet;
                    michal = michal.bind(zuuluu)();
                    return entity;
                };
                sizing['onPress'] = sequen;
                sizing = vacuum.bind(tangon)(output, sizing);
                option['children'] = sizing;
                yankee = romeon.bind(tangon)(yankee, option);
                option = new Array(4);
                option[0] = yankee;
                yankee = verify != source;
                if(!yankee) { _fun00018_ip = 932; continue _fun00017 }
 907:
                sizing = _closure1_slot1;
                output = _closure1_slot2;
                romeon = 27;
                romeon = output[romeon];
                romeon = sizing.bind(tangon)(romeon);
                yankee = romeon.bind(tangon)(source);
 932:
                if(!yankee) { _fun00018_ip = 969; continue _fun00017 }
 935:
                output = _closure1_slot19;
                sizing = _closure1_slot25;
                romeon = {};
                romeon['user'] = ctrled;
                romeon['activity'] = source;
                romeon['application'] = update;
                romeon['onAction'] = foxtra;
                yankee = output.bind(tangon)(sizing, romeon);
 969:
                option[1] = yankee;
                yankee = verify != echoed;
                if(!yankee) { _fun00018_ip = 984; continue _fun00017 }
 980:
                yankee = verify != kiloes;
 984:
                if(!yankee) { _fun00018_ip = 1042; continue _fun00017 }
 987:
                output = _closure1_slot19;
                sizing = _closure1_slot1;
                update = _closure1_slot2;
                romeon = 39;
                romeon = update[romeon];
                sizing = sizing.bind(tangon)(romeon);
                romeon = {};
                romeon['guild'] = echoed;
                romeon['channel'] = kiloes;
                romeon['onAction'] = foxtra;
                result = result.voiceChannelDivider;
                romeon['style'] = result;
                yankee = output.bind(tangon)(sizing, romeon);
 1042:
                option[2] = yankee;
                verify = verify != kiloes;
                if(!verify) { _fun00018_ip = 1105; continue _fun00017 }
 1053:
                romeon = _closure1_slot19;
                yankee = _closure1_slot0;
                sizing = _closure1_slot2;
                offset = 41;
                offset = sizing[offset];
                offset = yankee.bind(tangon)(offset);
                yankee = offset.VoiceChannelButtons;
                offset = {};
                offset['channel'] = kiloes;
                offset['isInChannel'] = backup;
                offset['onAction'] = foxtra;
                verify = romeon.bind(tangon)(yankee, offset);
 1105:
                option[3] = verify;
                report['children'] = option;
                report = golfie.bind(tangon)(oscard, report);
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        var _closure1_slot27 = entity;
        entity = function(argFoo) { // Original name: VoiceCallActivityCard
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = argFoo;
                option = entity.user;
                yankee = entity.channel;
                var _closure2_slot0 = yankee;
                offset = entity.isInChannel;
                golfie = entity.style;
                entity = _closure1_slot22;
                tangon = undefined;
                status = entity.bind(tangon)();
                michal = _closure1_slot1;
                report = _closure1_slot2;
                entity = 50;
                entity = report[entity];
                entity = michal.bind(tangon)(entity);
                kiloes = entity.bind(tangon)(yankee);
                entity = 51;
                entity = report[entity];
                entity = michal.bind(tangon)(entity);
                record = entity.bind(tangon)(yankee);
                zuuluu = _closure1_slot0;
                entity = 34;
                verify = report[entity];
                backup = zuuluu.bind(tangon)(verify);
                foxtra = backup.useStateFromStores;
                verify = _closure1_slot10;
                romeon = new Array(1);
                romeon[0] = verify;
                verify = function() {
                    zuuluu = _closure1_slot10;
                    michal = zuuluu.getGuild;
                    entity = _closure2_slot0;
                    entity = entity.guild_id;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                papara = foxtra.bind(backup)(romeon, verify);
                var _closure2_slot1 = papara;
                entity = report[entity];
                romeon = zuuluu.bind(tangon)(entity);
                verify = romeon.useStateFromStores;
                entity = _closure1_slot11;
                zuuluu = new Array(1);
                zuuluu[0] = entity;
                entity = function() {
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        zuuluu = _closure2_slot0;
                        entity = zuuluu.isPrivate;
                        entity = entity.bind(zuuluu)();
                        if(entity) { _fun00028_ip = 53; continue _fun00027 }
 20:
                        report = _closure1_slot11;
                        tangon = report.can;
                        zuuluu = _closure1_slot16;
                        zuuluu = zuuluu.CONNECT;
                        michal = _closure2_slot0;
                        entity = tangon.bind(report)(zuuluu, michal);
 53:
                        return entity;
                    }
                };
                sizing = verify.bind(romeon)(zuuluu, entity);
                entity = 30;
                entity = report[entity];
                zuuluu = michal.bind(tangon)(entity);
                entity = 31;
                entity = report[entity];
                entity = michal.bind(tangon)(entity);
                entity = entity.USER_PROFILE_VOICE_ACTIVITY_CARD;
                entity = zuuluu.bind(tangon)(entity);
                verify = entity.analyticsLocations;
                entity = entity.newestAnalyticsLocation;
                var _closure2_slot2 = entity;
                entity = 32;
                entity = report[entity];
                zuuluu = michal.bind(tangon)(entity);
                entity = {};
                romeon = 'voice';
                entity['display'] = romeon;
                romeon = {};
                foxtra = 'VOICE';
                romeon['type'] = foxtra;
                entity['activity'] = romeon;
                romeon = yankee.id;
                entity['voiceChannelId'] = romeon;
                entity['user'] = option;
                entity['analyticsLocations'] = verify;
                verify = zuuluu.bind(tangon)(entity);
                var _closure2_slot3 = verify;
                entity = 33;
                entity = report[entity];
                zuuluu = michal.bind(tangon)(entity);
                entity = {};
                option = option.id;
                entity['userId'] = option;
                entity['onAction'] = verify;
                entity = zuuluu.bind(tangon)(entity);
                zuuluu = _closure1_slot20;
                entity = 35;
                entity = report[entity];
                michal = michal.bind(tangon)(entity);
                entity = {};
                option = status.card;
                report = new Array(2);
                report[0] = option;
                report[1] = golfie;
                entity['style'] = report;
                report = yankee.isDM;
                report = report.bind(yankee)();
                if(report) { _fun00026_ip = 468; continue _fun00025 }
 372:
                report = yankee.isGroupDM;
                report = report.bind(yankee)();
                if(report) { _fun00026_ip = 468; continue _fun00025 }
 385:
                report = yankee.isGuildStageVoice;
                report = report.bind(yankee)();
                foxtra = _closure1_slot0;
                backup = _closure1_slot2;
                golfie = 20;
                option = backup[golfie];
                option = foxtra.bind(tangon)(option);
                romeon = option.intl;
                option = romeon.string;
                golfie = backup[golfie];
                golfie = foxtra.bind(tangon)(golfie);
                golfie = golfie.t;
                if(report) { _fun00026_ip = 455; continue _fun00025 }
 442:
                report = golfie.msxteH;
                report = option.bind(romeon)(report);
                _fun00026_ip = 466; continue _fun00025;
 455:
                golfie = golfie.QygGCA;
                report = option.bind(romeon)(golfie);
 466:
                _fun00026_ip = 523; continue _fun00025;
 468:
                foxtra = _closure1_slot0;
                backup = _closure1_slot2;
                golfie = 20;
                option = backup[golfie];
                option = foxtra.bind(tangon)(option);
                romeon = option.intl;
                option = romeon.string;
                golfie = backup[golfie];
                golfie = foxtra.bind(tangon)(golfie);
                golfie = golfie.t;
                golfie = golfie.9FaEzs;
                report = option.bind(romeon)(golfie);
 523:
                entity['title'] = report;
                report = status.cardTitle;
                entity['titleStyle'] = report;
                option = _closure1_slot20;
                golfie = _closure1_slot7;
                report = {};
                romeon = status.body;
                report['style'] = romeon;
                backup = _closure1_slot19;
                foxtra = _closure1_slot1;
                output = _closure1_slot2;
                romeon = 52;
                romeon = output[romeon];
                foxtra = foxtra.bind(tangon)(romeon);
                romeon = {};
                romeon['users'] = kiloes;
                output = null;
                result = output == papara;
                kiloes = undefined;
                if(result) { _fun00026_ip = 604; continue _fun00025 }
 599:
                kiloes = papara.id;
 604:
                romeon['guildId'] = kiloes;
                foxtra = backup.bind(tangon)(foxtra, romeon);
                romeon = new Array(2);
                romeon[0] = foxtra;
                kiloes = _closure1_slot20;
                backup = _closure1_slot7;
                foxtra = {};
                result = status.voiceCallContent;
                foxtra['style'] = result;
                if(sizing) { _fun00026_ip = 794; continue _fun00025 }
 648:
                echoed = _closure1_slot20;
                result = _closure1_slot0;
                target = _closure1_slot2;
                sizing = 15;
                sizing = target[sizing];
                sizing = result.bind(tangon)(sizing);
                result = sizing.Text;
                sizing = {'variant': 'text-md/semibold', 'color': 'header-primary'};
                vacuum = _closure1_slot19;
                ctrled = _closure1_slot7;
                update = {};
                sequen = status.voiceCallNameIconWrapper;
                update['style'] = sequen;
                cntext = _closure1_slot19;
                config = _closure1_slot1;
                sequen = 53;
                sequen = target[sequen];
                config = config.bind(tangon)(sequen);
                sequen = {'channel': null, 'size': 'sm', 'color': 'header-primary'};
                sequen['channel'] = yankee;
                sequen = cntext.bind(tangon)(config, sequen);
                update['children'] = sequen;
                ctrled = vacuum.bind(tangon)(ctrled, update);
                update = new Array(2);
                update[0] = ctrled;
                update[1] = record;
                sizing['children'] = update;
                result = echoed.bind(tangon)(result, sizing);
                _fun00026_ip = 1065; continue _fun00025;
 794:
                update = _closure1_slot19;
                vacuum = _closure1_slot0;
                whisks = _closure1_slot2;
                sizing = 54;
                sizing = whisks[sizing];
                sizing = vacuum.bind(tangon)(sizing);
                echoed = sizing.PressableOpacity;
                sizing = {};
                ctrled = 'button';
                sizing['accessibilityRole'] = ctrled;
                sierra = _closure1_slot1;
                ctrled = 55;
                ctrled = whisks[ctrled];
                sequen = sierra.bind(tangon)(ctrled);
                ctrled = {};
                ctrled['channel'] = yankee;
                ctrled = sequen.bind(tangon)(ctrled);
                sizing['accessibilityLabel'] = ctrled;
                ctrled = 20;
                sequen = whisks[ctrled];
                sequen = vacuum.bind(tangon)(sequen);
                config = sequen.intl;
                sequen = config.string;
                ctrled = whisks[ctrled];
                ctrled = vacuum.bind(tangon)(ctrled);
                ctrled = ctrled.t;
                ctrled = ctrled.9C444u;
                ctrled = sequen.bind(config)(ctrled);
                sizing['accessibilityHint'] = ctrled;
                ctrled = function() { // Original name: onPress
                    tangon = _closure2_slot3;
                    zuuluu = {};
                    entity = 'OPEN_VOICE_CHANNEL';
                    zuuluu['action'] = entity;
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    tangon = 49;
                    tangon = report[tangon];
                    golfie = oscard.bind(entity)(tangon);
                    tangon = golfie.hideActionSheet;
                    tangon = tangon.bind(golfie)();
                    tangon = 56;
                    tangon = report[tangon];
                    oscard = oscard.bind(entity)(tangon);
                    tangon = oscard.popAll;
                    tangon = tangon.bind(oscard)();
                    tangon = _closure1_slot0;
                    zuuluu = 57;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.openGuildVoiceModal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot2;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                sizing['onPress'] = ctrled;
                sequen = _closure1_slot20;
                ctrled = 15;
                ctrled = whisks[ctrled];
                ctrled = vacuum.bind(tangon)(ctrled);
                vacuum = ctrled.Text;
                ctrled = {'variant': 'text-md/semibold', 'color': 'header-primary'};
                target = _closure1_slot19;
                cntext = _closure1_slot7;
                config = {};
                status = status.voiceCallNameIconWrapper;
                config['style'] = status;
                limora = _closure1_slot19;
                status = 53;
                status = whisks[status];
                sierra = sierra.bind(tangon)(status);
                status = {'channel': null, 'size': 'sm', 'color': 'header-primary'};
                status['channel'] = yankee;
                status = limora.bind(tangon)(sierra, status);
                config['children'] = status;
                cntext = target.bind(tangon)(cntext, config);
                config = new Array(2);
                config[0] = cntext;
                config[1] = record;
                ctrled['children'] = config;
                ctrled = sequen.bind(tangon)(vacuum, ctrled);
                sizing['children'] = ctrled;
                result = update.bind(tangon)(echoed, sizing);
 1065:
                sizing = new Array(2);
                sizing[0] = result;
                result = output == papara;
                output = null;
                if(result) { _fun00026_ip = 1355; continue _fun00025 }
 1085:
                update = _closure1_slot19;
                config = _closure1_slot0;
                target = _closure1_slot2;
                result = 54;
                result = target[result];
                result = config.bind(tangon)(result);
                echoed = result.PressableOpacity;
                result = {};
                ctrled = 'button';
                result['accessibilityRole'] = ctrled;
                sequen = 20;
                ctrled = target[sequen];
                ctrled = config.bind(tangon)(ctrled);
                record = ctrled.intl;
                vacuum = record.string;
                ctrled = target[sequen];
                ctrled = config.bind(tangon)(ctrled);
                ctrled = ctrled.t;
                ctrled = ctrled.KLOhbG;
                ctrled = vacuum.bind(record)(ctrled);
                result['accessibilityHint'] = ctrled;
                ctrled = target[sequen];
                ctrled = config.bind(tangon)(ctrled);
                cntext = ctrled.intl;
                record = cntext.formatToPlainString;
                ctrled = target[sequen];
                ctrled = config.bind(tangon)(ctrled);
                ctrled = ctrled.t;
                vacuum = ctrled.hq/Qzc;
                ctrled = {};
                status = papara.name;
                ctrled['guildName'] = status;
                ctrled = record.bind(cntext)(vacuum, ctrled);
                result['accessibilityLabel'] = ctrled;
                source = function() { // Original name: onPress
                    tangon = _closure2_slot3;
                    michal = {};
                    entity = 'OPEN_VOICE_GUILD';
                    michal['action'] = entity;
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    report = 58;
                    report = tangon[report];
                    oscard = oscard.bind(entity)(report);
                    report = oscard.transitionToGuild;
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.id;
                    zuuluu = report.bind(oscard)(zuuluu);
                    zuuluu = _closure1_slot1;
                    michal = 59;
                    michal = tangon[michal];
                    michal = zuuluu.bind(entity)(michal);
                    michal = michal.bind(entity)();
                    michal = 49;
                    michal = tangon[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.hideActionSheet;
                    michal = michal.bind(zuuluu)();
                    return entity;
                };
                result['onPress'] = source;
                vacuum = _closure1_slot19;
                source = 15;
                source = target[source];
                source = config.bind(tangon)(source);
                ctrled = source.Text;
                source = {};
                record = 'text-xs/medium';
                source['variant'] = record;
                record = target[sequen];
                record = config.bind(tangon)(record);
                cntext = record.intl;
                record = cntext.format;
                sequen = target[sequen];
                sequen = config.bind(tangon)(sequen);
                sequen = sequen.t;
                config = sequen.hq/Qzc;
                sequen = {};
                papara = papara.name;
                sequen['guildName'] = papara;
                sequen = record.bind(cntext)(config, sequen);
                source['children'] = sequen;
                source = vacuum.bind(tangon)(ctrled, source);
                result['children'] = source;
                output = update.bind(tangon)(echoed, result);
 1355:
                sizing[1] = output;
                foxtra['children'] = sizing;
                foxtra = kiloes.bind(tangon)(backup, foxtra);
                romeon[1] = foxtra;
                report['children'] = romeon;
                golfie = option.bind(tangon)(golfie, report);
                report = new Array(2);
                report[0] = golfie;
                option = _closure1_slot19;
                golfie = _closure1_slot0;
                romeon = _closure1_slot2;
                oscard = 41;
                oscard = romeon[oscard];
                oscard = golfie.bind(tangon)(oscard);
                golfie = oscard.VoiceChannelButtons;
                oscard = {};
                oscard['channel'] = yankee;
                oscard['isInChannel'] = offset;
                oscard['onAction'] = verify;
                oscard = option.bind(tangon)(golfie, oscard);
                report[1] = oscard;
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        var _closure1_slot28 = entity;
        entity = global;
        option = entity.Object;
        golfie = option.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = golfie.bind(option)(zuuluu, entity, tangon);
        backup = 0;
        tangon = oscard[backup];
        entity = undefined;
        tangon = yankee.bind(entity)(tangon);
        var _closure1_slot3 = tangon;
        kiloes = 1;
        golfie = oscard[kiloes];
        tangon = argCor;
        tangon = tangon.bind(entity)(golfie);
        tangon = 2;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        golfie = tangon.Image;
        var _closure1_slot4 = golfie;
        golfie = tangon.TouchableOpacity;
        var _closure1_slot5 = golfie;
        golfie = tangon.TouchableWithoutFeedback;
        var _closure1_slot6 = golfie;
        tangon = tangon.View;
        var _closure1_slot7 = tangon;
        tangon = 3;
        tangon = oscard[tangon];
        tangon = yankee.bind(entity)(tangon);
        var _closure1_slot8 = tangon;
        tangon = 4;
        tangon = oscard[tangon];
        tangon = yankee.bind(entity)(tangon);
        var _closure1_slot9 = tangon;
        tangon = 5;
        tangon = oscard[tangon];
        tangon = yankee.bind(entity)(tangon);
        var _closure1_slot10 = tangon;
        tangon = 6;
        tangon = oscard[tangon];
        tangon = yankee.bind(entity)(tangon);
        var _closure1_slot11 = tangon;
        tangon = 7;
        tangon = oscard[tangon];
        tangon = yankee.bind(entity)(tangon);
        var _closure1_slot12 = tangon;
        tangon = 8;
        tangon = oscard[tangon];
        tangon = yankee.bind(entity)(tangon);
        var _closure1_slot13 = tangon;
        tangon = 9;
        tangon = oscard[tangon];
        tangon = yankee.bind(entity)(tangon);
        var _closure1_slot14 = tangon;
        tangon = 10;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        golfie = tangon.ActivityTypes;
        var _closure1_slot15 = golfie;
        golfie = tangon.Permissions;
        var _closure1_slot16 = golfie;
        golfie = tangon.PlatformTypes;
        var _closure1_slot17 = golfie;
        tangon = tangon.StatusTypes;
        var _closure1_slot18 = tangon;
        tangon = 11;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        golfie = tangon.jsx;
        var _closure1_slot19 = golfie;
        golfie = tangon.jsxs;
        var _closure1_slot20 = golfie;
        tangon = tangon.Fragment;
        var _closure1_slot21 = tangon;
        foxtra = 12;
        tangon = oscard[foxtra];
        option = report.bind(entity)(tangon);
        golfie = option.createStyles;
        tangon = {};
        verify = {};
        verify['gap'] = foxtra;
        tangon['card'] = verify;
        verify = {};
        verify['marginBottom'] = backup;
        tangon['cardTitle'] = verify;
        verify = {};
        offset = 13;
        romeon = oscard[offset];
        romeon = yankee.bind(entity)(romeon);
        romeon = romeon.colors;
        romeon = romeon.HEADER_SECONDARY;
        verify['tintColor'] = romeon;
        tangon['cardTitleIcon'] = verify;
        romeon = 16;
        verify = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 16};
        tangon['body'] = verify;
        verify = {};
        verify['flex'] = kiloes;
        tangon['content'] = verify;
        verify = {};
        kiloes = 'relative';
        verify['position'] = kiloes;
        tangon['imageContainer'] = verify;
        verify = {'width': 60, 'maxHeight': 60, 'aspectRatio': '1 / 1'};
        tangon['imageAspectRatio'] = verify;
        verify = {'width': 60, 'maxHeight': 100, 'aspectRatio': '2 / 3'};
        tangon['crunchyrollImageAspectRatio'] = verify;
        verify = {'borderRadius': null, 'width': '100%', 'height': '100%'};
        kiloes = oscard[offset];
        kiloes = yankee.bind(entity)(kiloes);
        kiloes = kiloes.radii;
        kiloes = kiloes.xs;
        verify['borderRadius'] = kiloes;
        tangon['largeImage'] = verify;
        verify = {'borderRadius': 16, 'position': 'absolute', 'right': 4294967292, 'bottom': 4294967292};
        kiloes = oscard[offset];
        kiloes = yankee.bind(entity)(kiloes);
        kiloes = kiloes.colors;
        kiloes = kiloes.BACKGROUND_PRIMARY;
        verify['backgroundColor'] = kiloes;
        tangon['smallImageBackground'] = verify;
        verify = {'width': 24, 'height': 24, 'borderRadius': 12};
        tangon['smallImage'] = verify;
        verify = {'marginTop': 4, 'flexDirection': 'row', 'flexWrap': 'wrap', 'columnGap': 8, 'rowGap': 0};
        tangon['badges'] = verify;
        verify = {};
        verify['marginTop'] = romeon;
        tangon['timebar'] = verify;
        verify = {'borderTopWidth': 1, 'borderTopColor': null, 'paddingTop': 12};
        kiloes = oscard[offset];
        kiloes = yankee.bind(entity)(kiloes);
        kiloes = kiloes.colors;
        kiloes = kiloes.BACKGROUND_MODIFIER_ACCENT;
        verify['borderTopColor'] = kiloes;
        tangon['voiceChannelDivider'] = verify;
        verify = {'flexDirection': 'column', 'gap': 8};
        tangon['customButtons'] = verify;
        verify = {'aspectRatio': 1.7777777777777777, 'borderRadius': null, 'overflow': 'hidden'};
        kiloes = oscard[offset];
        kiloes = yankee.bind(entity)(kiloes);
        kiloes = kiloes.radii;
        kiloes = kiloes.xs;
        verify['borderRadius'] = kiloes;
        tangon['streamPreview'] = verify;
        verify = {'height': 16, 'paddingHorizontal': 6};
        kiloes = oscard[offset];
        kiloes = yankee.bind(entity)(kiloes);
        kiloes = kiloes.colors;
        kiloes = kiloes.STATUS_DANGER_BACKGROUND;
        verify['backgroundColor'] = kiloes;
        kiloes = oscard[offset];
        kiloes = yankee.bind(entity)(kiloes);
        kiloes = kiloes.radii;
        kiloes = kiloes.sm;
        verify['borderRadius'] = kiloes;
        tangon['liveIndicator'] = verify;
        verify = {};
        kiloes = 'uppercase';
        verify['textTransform'] = kiloes;
        tangon['liveIndicatorText'] = verify;
        verify = {};
        verify['padding'] = backup;
        tangon['voiceActivityCard'] = verify;
        verify = {'padding': 0, 'marginBottom': 4294967280};
        tangon['voiceSettings'] = verify;
        verify = {'borderTopWidth': 1, 'borderTopColor': null, 'paddingTop': 16, 'marginTop': 4, 'marginHorizontal': 4294967268, 'paddingHorizontal': 28};
        backup = oscard[offset];
        backup = yankee.bind(entity)(backup);
        backup = backup.colors;
        backup = backup.BORDER_SUBTLE;
        verify['borderTopColor'] = backup;
        tangon['voiceSettingsDivider'] = verify;
        verify = {'flex': 1, 'gap': 4};
        tangon['voiceCallContent'] = verify;
        verify = {'width': 22, 'height': null, 'justifyContent': 'center'};
        backup = 14;
        backup = oscard[backup];
        kiloes = report.bind(entity)(backup);
        backup = kiloes.isAndroid;
        backup = backup.bind(kiloes)();
        if(!backup) { _fun00002_ip = 1025; continue _fun00001 }
 1022:
        romeon = foxtra;
 1025:
        verify['height'] = romeon;
        tangon['voiceCallNameIconWrapper'] = verify;
        verify = {};
        offset = oscard[offset];
        offset = yankee.bind(entity)(offset);
        offset = offset.radii;
        offset = offset.xl;
        verify['borderRadius'] = offset;
        tangon['guildIcon'] = verify;
        tangon = golfie.bind(option)(tangon);
        var _closure1_slot22 = tangon;
        tangon = 63;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'modules/user_profile/native/UserProfileActivity.tsx';
        tangon = report.bind(oscard)(tangon);
        michal = function(argFoo) { // Original name: UserProfileActivity
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                entity = argFoo;
                yankee = entity.user;
                var _closure2_slot0 = yankee;
                offset = entity.currentUser;
                var _closure2_slot1 = offset;
                golfie = entity.guildId;
                var _closure2_slot2 = golfie;
                foxtra = entity.style;
                var _closure2_slot3 = foxtra;
                entity = _closure1_slot22;
                tangon = undefined;
                verify = entity.bind(tangon)();
                var _closure2_slot4 = verify;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 60;
                entity = zuuluu[entity];
                oscard = michal.bind(tangon)(entity);
                entity = yankee.id;
                entity = oscard.bind(tangon)(entity);
                oscard = entity.live;
                update = entity.stream;
                var _closure2_slot5 = update;
                entity = 61;
                entity = zuuluu[entity];
                michal = michal.bind(tangon)(entity);
                entity = {};
                option = yankee.id;
                entity['userId'] = option;
                entity['guildId'] = golfie;
                entity = michal.bind(tangon)(entity);
                option = entity.voiceChannel;
                var _closure2_slot6 = option;
                echoed = entity.voiceActivity;
                var _closure2_slot7 = echoed;
                michal = _closure1_slot0;
                entity = 34;
                golfie = zuuluu[entity];
                sizing = michal.bind(tangon)(golfie);
                kiloes = sizing.useStateFromStores;
                golfie = _closure1_slot14;
                backup = new Array(1);
                backup[0] = golfie;
                golfie = function() {
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        entity = _closure2_slot6;
                        report = null;
                        entity = report != entity;
                        if(!entity) { _fun00032_ip = 64; continue _fun00031 }
 16:
                        tangon = _closure1_slot14;
                        zuuluu = tangon.getCurrentClientVoiceChannelId;
                        oscard = _closure2_slot2;
                        oscard = report != oscard;
                        report = null;
                        if(!oscard) { _fun00032_ip = 46; continue _fun00031 }
 42:
                        report = _closure2_slot2;
 46:
                        zuuluu = zuuluu.bind(tangon)(report);
                        michal = _closure2_slot6;
                        michal = michal.id;
                        entity = zuuluu === michal;
 64:
                        return entity;
                    }
                };
                golfie = kiloes.bind(sizing)(backup, golfie);
                var _closure2_slot8 = golfie;
                kiloes = yankee.id;
                backup = offset.id;
                backup = kiloes === backup;
                var _closure2_slot9 = backup;
                entity = zuuluu[entity];
                backup = michal.bind(tangon)(entity);
                zuuluu = backup.useStateFromStores;
                entity = _closure1_slot13;
                michal = new Array(2);
                michal[0] = entity;
                entity = _closure1_slot12;
                michal[1] = entity;
                entity = function() {
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                        zuuluu = _closure2_slot9;
                        if(zuuluu) { _fun00034_ip = 39; continue _fun00033 }
 13:
                        tangon = _closure1_slot12;
                        zuuluu = tangon.getStatus;
                        entity = _closure2_slot0;
                        entity = entity.id;
                        zuuluu = zuuluu.bind(tangon)(entity);
                        _fun00034_ip = 53; continue _fun00033;
 39:
                        tangon = _closure1_slot13;
                        entity = tangon.getStatus;
                        zuuluu = entity.bind(tangon)();
 53:
                        entity = _closure1_slot18;
                        entity = entity.OFFLINE;
                        entity = zuuluu === entity;
                        if(entity) { _fun00034_ip = 84; continue _fun00033 }
 70:
                        michal = _closure1_slot18;
                        michal = michal.INVISIBLE;
                        entity = zuuluu === michal;
 84:
                        return entity;
                    }
                };
                michal = zuuluu.bind(backup)(michal, entity);
                if(!michal) { _fun00030_ip = 283; continue _fun00029 }
 271:
                entity = null;
                if(!(entity != option)) { _fun00030_ip = 283; continue _fun00029 }
 277:
                if(golfie) { _fun00030_ip = 664; continue _fun00029 }
 283:
                entity = null;
                if(michal) { _fun00030_ip = 662; continue _fun00029 }
 291:
                kiloes = oscard;
                if(!(entity != echoed)) { _fun00030_ip = 313; continue _fun00029 }
 298:
                zuuluu = oscard.filter;
                michal = function(argFoo) {
                    michal = _closure2_slot7;
                    entity = argFoo;
                    entity = entity !== michal;
                    return entity;
                };
                kiloes = zuuluu.bind(oscard)(michal);
 313:
                source = function(argFoo) { // Original name: renderVoiceActivityCard
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        zuuluu = argFoo;
                        entity = _closure2_slot5;
                        tangon = null;
                        if(!(tangon != entity)) { _fun00036_ip = 37; continue _fun00035 }
 16:
                        entity = _closure2_slot5;
                        report = entity.channelId;
                        entity = zuuluu.id;
                        if(!(report !== entity)) { _fun00036_ip = 171; continue _fun00035 }
 37:
                        entity = _closure2_slot7;
                        if(!(tangon == entity)) { _fun00036_ip = 103; continue _fun00035 }
 45:
                        oscard = _closure1_slot19;
                        report = _closure1_slot28;
                        tangon = {};
                        entity = _closure2_slot0;
                        tangon['user'] = entity;
                        tangon['channel'] = zuuluu;
                        entity = _closure2_slot8;
                        tangon['isInChannel'] = entity;
                        entity = _closure2_slot4;
                        entity = entity.voiceActivityCard;
                        tangon['style'] = entity;
                        entity = undefined;
                        entity = oscard.bind(entity)(report, tangon);
                        _fun00036_ip = 169; continue _fun00035;
 103:
                        oscard = _closure1_slot19;
                        report = _closure1_slot26;
                        tangon = {};
                        golfie = _closure2_slot0;
                        tangon['user'] = golfie;
                        golfie = _closure2_slot1;
                        tangon['currentUser'] = golfie;
                        golfie = _closure2_slot7;
                        tangon['activity'] = golfie;
                        tangon['voiceChannel'] = zuuluu;
                        zuuluu = _closure2_slot4;
                        zuuluu = zuuluu.voiceActivityCard;
                        tangon['style'] = zuuluu;
                        zuuluu = undefined;
                        entity = oscard.bind(zuuluu)(report, tangon);
 169:
                        _fun00036_ip = 232; continue _fun00035;
 171:
                        report = _closure1_slot19;
                        tangon = _closure1_slot27;
                        zuuluu = {};
                        oscard = _closure2_slot0;
                        zuuluu['user'] = oscard;
                        oscard = _closure2_slot5;
                        zuuluu['stream'] = oscard;
                        oscard = _closure2_slot7;
                        zuuluu['activity'] = oscard;
                        michal = _closure2_slot4;
                        michal = michal.voiceActivityCard;
                        zuuluu['style'] = michal;
                        michal = undefined;
                        entity = report.bind(michal)(tangon, zuuluu);
 232:
                        return entity;
                    }
                };
                oscard = _closure1_slot20;
                zuuluu = _closure1_slot21;
                michal = {};
                backup = entity != option;
                if(!backup) { _fun00030_ip = 552; continue _fun00029 }
 338:
                if(golfie) { _fun00030_ip = 409; continue _fun00029 }
 341:
                output = _closure1_slot19;
                sizing = _closure1_slot1;
                result = _closure1_slot2;
                golfie = 35;
                golfie = result[golfie];
                sizing = sizing.bind(tangon)(golfie);
                golfie = {};
                ctrled = verify.card;
                result = new Array(2);
                result[0] = ctrled;
                result[1] = foxtra;
                golfie['style'] = result;
                result = source.bind(tangon)(option);
                golfie['children'] = result;
                golfie = output.bind(tangon)(sizing, golfie);
                _fun00030_ip = 549; continue _fun00029;
 409:
                result = _closure1_slot20;
                vacuum = _closure1_slot1;
                config = _closure1_slot2;
                sizing = 35;
                sizing = config[sizing];
                output = vacuum.bind(tangon)(sizing);
                sizing = {};
                sequen = verify.card;
                ctrled = new Array(2);
                ctrled[0] = sequen;
                ctrled[1] = foxtra;
                sizing['style'] = ctrled;
                ctrled = source.bind(tangon)(option);
                source = new Array(2);
                source[0] = ctrled;
                sequen = _closure1_slot19;
                ctrled = 62;
                ctrled = config[ctrled];
                vacuum = vacuum.bind(tangon)(ctrled);
                ctrled = {};
                ctrled['user'] = yankee;
                ctrled['currentUser'] = offset;
                ctrled['channel'] = option;
                record = verify.voiceSettings;
                config = new Array(2);
                config[0] = record;
                record = verify.voiceSettingsDivider;
                config[1] = record;
                ctrled['style'] = config;
                ctrled = sequen.bind(tangon)(vacuum, ctrled);
                source[1] = ctrled;
                sizing['children'] = source;
                golfie = result.bind(tangon)(output, sizing);
 549:
                backup = golfie;
 552:
                golfie = new Array(3);
                golfie[0] = backup;
                backup = entity != update;
                if(!backup) { _fun00030_ip = 590; continue _fun00029 }
 567:
                output = update.channelId;
                result = entity == option;
                sizing = undefined;
                if(result) { _fun00030_ip = 586; continue _fun00029 }
 581:
                sizing = option.id;
 586:
                backup = output !== sizing;
 590:
                if(!backup) { _fun00030_ip = 627; continue _fun00029 }
 593:
                result = _closure1_slot19;
                output = _closure1_slot27;
                sizing = {};
                sizing['user'] = yankee;
                sizing['stream'] = update;
                sizing['activity'] = echoed;
                sizing['style'] = foxtra;
                backup = result.bind(tangon)(output, sizing);
 627:
                golfie[1] = backup;
                backup = kiloes.map;
                romeon = function(argFoo, argBar) {
                    _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                        entity = argFoo;
                        report = argBar;
                        tangon = _closure1_slot19;
                        zuuluu = _closure1_slot26;
                        michal = {};
                        golfie = _closure2_slot0;
                        michal['user'] = golfie;
                        golfie = _closure2_slot1;
                        michal['currentUser'] = golfie;
                        michal['activity'] = entity;
                        oscard = _closure2_slot3;
                        michal['style'] = oscard;
                        entity = entity.application_id;
                        oscard = null;
                        if(!(oscard != entity)) { _fun00038_ip = 67; continue _fun00037 }
 64:
                        report = entity;
 67:
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu, michal, report);
                        return entity;
                    }
                };
                romeon = backup.bind(kiloes)(romeon);
                golfie[2] = romeon;
                michal['children'] = golfie;
                michal = oscard.bind(tangon)(zuuluu, michal);
                return michal;
 662:
                return entity;
 664:
                zuuluu = _closure1_slot19;
                oscard = _closure1_slot1;
                romeon = _closure1_slot2;
                entity = 35;
                entity = romeon[entity];
                michal = oscard.bind(tangon)(entity);
                entity = {};
                backup = verify.card;
                golfie = new Array(2);
                golfie[0] = backup;
                golfie[1] = foxtra;
                entity['style'] = golfie;
                golfie = _closure1_slot19;
                report = 62;
                report = romeon[report];
                oscard = oscard.bind(tangon)(report);
                report = {};
                report['user'] = yankee;
                report['currentUser'] = offset;
                report['channel'] = option;
                offset = verify.voiceSettings;
                option = new Array(2);
                option[0] = offset;
                verify = verify.voiceSettingsDivider;
                option[1] = verify;
                report['style'] = option;
                report = golfie.bind(tangon)(oscard, report);
                entity['children'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        zuuluu['default'] = michal;
        return entity;
    }
})();