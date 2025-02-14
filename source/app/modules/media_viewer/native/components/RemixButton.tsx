// app/modules/media_viewer/native/components/RemixButton.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.View;
    var _closure1_slot5 = verify;
    verify = tango.StyleSheet;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    yankee = tango.Colors;
    tango = tango.GIF_RE_IOS;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ContentDismissActionType;
    var _closure1_slot10 = tango;
    tango = 8;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot11 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot12 = tango;
    options = verify.create;
    tango = {};
    offset = {'position': 'absolute', 'height': 30, 'width': 30, 'zIndex': 1};
    tango['sparkle'] = offset;
    offset = {'left': 4294967292, 'top': 4294967291};
    tango['leftSparkle'] = offset;
    offset = {'position': 'absolute', 'right': 4294967295, 'bottom': 4294967291};
    yankee = yankee.BRAND_360;
    offset['tintColor'] = yankee;
    tango['rightSparkle'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot13 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: RemixButton
        _fun102267: for(var _fun102267_ip = 0; ; ) switch(_fun102267_ip) {
 0:
            entity = argFoo;
            output = entity.source;
            var _closure2_slot0 = output;
            backup = entity.setClickedRemix;
            var _closure2_slot1 = backup;
            yankee = _closure1_slot0;
            kilo = _closure1_slot2;
            entity = 11;
            entity = kilo[entity];
            report = undefined;
            tango = yankee.bind(report)(entity);
            zulu = tango.useIsRemixEnabledForMedia;
            mike = output.channelId;
            oscar = _closure1_slot1;
            entity = 12;
            entity = kilo[entity];
            entity = oscar.bind(report)(entity);
            entity = entity.MEDIA_VIEWER;
            source = zulu.bind(tango)(mike, output, entity);
            var _closure2_slot2 = source;
            entity = {'isVideo': false, 'isGIF': false, 'isImage': false, 'isAnimatedWebP': false, 'isAnimatedAVIF': false};
            golf = false;
            mike = output.videoURI;
            zulu = null;
            if(!(zulu == mike)) { _fun102267_ip = 270; continue _fun102267 }
 120:
            mike = output.sourceURI;
            if(!(zulu != mike)) { _fun102267_ip = 278; continue _fun102267 }
 133:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 9;
            options = oscar[mike];
            sizing = tango.bind(report)(options);
            foxtrot = sizing.urlMatchesFileExtension;
            offset = output.sourceURI;
            options = _closure1_slot9;
            options = foxtrot.bind(sizing)(offset, options);
            entity['isGIF'] = options;
            mike = oscar[mike];
            offset = tango.bind(report)(mike);
            options = offset.isImageUrl;
            mike = output.sourceURI;
            mike = options.bind(offset)(mike);
            entity['isImage'] = mike;
            mike = 10;
            options = oscar[mike];
            offset = tango.bind(report)(options);
            options = offset.isAnimatedWebpSource;
            options = options.bind(offset)(output);
            entity['isAnimatedWebP'] = options;
            mike = oscar[mike];
            tango = tango.bind(report)(mike);
            mike = tango.isAnimatedAvifSource;
            mike = mike.bind(tango)(output);
            entity['isAnimatedAVIF'] = mike;
            _fun102267_ip = 278; continue _fun102267;
 270:
            mike = true;
            entity['isVideo'] = mike;
 278:
            update = entity.isVideo;
            var _closure2_slot3 = update;
            echo = entity.isGIF;
            var _closure2_slot4 = echo;
            result = entity.isImage;
            var _closure2_slot5 = result;
            offset = entity.isAnimatedWebP;
            var _closure2_slot6 = offset;
            entity = entity.isAnimatedAVIF;
            var _closure2_slot7 = entity;
            tango = _closure1_slot8;
            mike = tango.getCurrentUser;
            mike = mike.bind(tango)();
            var _closure2_slot8 = mike;
            options = _closure1_slot7;
            oscar = options.getMessage;
            tango = output.channelId;
            mike = output.messageId;
            sizing = oscar.bind(options)(tango, mike);
            var _closure2_slot9 = sizing;
            mike = 13;
            mike = kilo[mike];
            options = yankee.bind(report)(mike);
            oscar = options.useStateFromStores;
            mike = _closure1_slot6;
            tango = new Array(1);
            tango[0] = mike;
            mike = function() {
                _fun102268: for(var _fun102268_ip = 0; ; ) switch(_fun102268_ip) {
 0:
                    zulu = _closure1_slot6;
                    mike = zulu.getNonNitroUpsellShownTimes;
                    report = _closure2_slot8;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun102268_ip = 42; continue _fun102268 }
 33:
                    tango = _closure2_slot8;
                    entity = tango.id;
 42:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            tango = oscar.bind(options)(tango, mike);
            mike = 14;
            mike = kilo[mike];
            oscar = yankee.bind(report)(mike);
            mike = oscar.useShouldUpsellRemix;
            options = mike.bind(oscar)(report, golf);
            foxtrot = _closure1_slot4;
            golf = foxtrot.useMemo;
            oscar = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 15;
                entity = mike[entity];
                mike = undefined;
                entity = zulu.bind(mike)(entity);
                entity = entity.bind(mike)();
                return entity;
            };
            mike = new Array(0);
            oscar = golf.bind(foxtrot)(oscar, mike);
            golf = foxtrot.useMemo;
            mike = new Array(6);
            mike[0] = source;
            mike[1] = update;
            mike[2] = echo;
            mike[3] = result;
            mike[4] = offset;
            mike[5] = entity;
            entity = function() {
                _fun102270: for(var _fun102270_ip = 0; ; ) switch(_fun102270_ip) {
 0:
                    entity = _closure2_slot2;
                    if(!entity) { _fun102270_ip = 17; continue _fun102270 }
 10:
                    zulu = _closure2_slot3;
                    entity = !zulu;
 17:
                    if(!entity) { _fun102270_ip = 27; continue _fun102270 }
 20:
                    zulu = _closure2_slot4;
                    entity = !zulu;
 27:
                    if(!entity) { _fun102270_ip = 34; continue _fun102270 }
 30:
                    entity = _closure2_slot5;
 34:
                    if(!entity) { _fun102270_ip = 44; continue _fun102270 }
 37:
                    zulu = _closure2_slot6;
                    entity = !zulu;
 44:
                    if(!entity) { _fun102270_ip = 54; continue _fun102270 }
 47:
                    mike = _closure2_slot7;
                    entity = !mike;
 54:
                    return entity;
                }
            };
            entity = golf.bind(foxtrot)(entity, mike);
            var _closure2_slot10 = entity;
            mike = 16;
            mike = kilo[mike];
            offset = yankee.bind(report)(mike);
            golf = offset.useSelectedDismissibleContent;
            mike = 17;
            mike = kilo[mike];
            mike = yankee.bind(report)(mike);
            mike = mike.DismissibleContent;
            yankee = mike.REMIXING_ENTRYPOINT_EDUCATION_UPSELLS_MOBILE;
            mike = new Array(1);
            mike[0] = yankee;
            offset = golf.bind(offset)(mike);
            golf = _closure1_slot3;
            mike = 2;
            offset = golf.bind(report)(offset, mike);
            mike = 0;
            golf = offset[mike];
            mike = 1;
            kilo = offset[mike];
            var _closure2_slot11 = kilo;
            result = foxtrot.useEffect;
            yankee = new Array(1);
            yankee[0] = kilo;
            offset = function() {
                entity = function() {
                    zulu = _closure2_slot11;
                    entity = _closure1_slot10;
                    mike = entity.UNKNOWN;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                return entity;
            };
            offset = result.bind(foxtrot)(offset, yankee);
            yankee = foxtrot.useCallback;
            offset = new Array(5);
            offset[0] = entity;
            offset[1] = output;
            offset[2] = sizing;
            offset[3] = kilo;
            offset[4] = backup;
            verify = function() {
                _fun102273: for(var _fun102273_ip = 0; ; ) switch(_fun102273_ip) {
 0:
                    tango = _closure2_slot1;
                    entity = undefined;
                    mike = true;
                    mike = tango.bind(entity)(mike);
                    mike = _closure2_slot10;
                    if(mike) { _fun102273_ip = 109; continue _fun102273 }
 23:
                    tango = _closure2_slot9;
                    mike = null;
                    if(!(mike != tango)) { _fun102273_ip = 186; continue _fun102273 }
 36:
                    report = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 19;
                    tango = options[tango];
                    golf = report.bind(entity)(tango);
                    oscar = golf.showRemixActionSheet;
                    report = _closure2_slot9;
                    tango = _closure1_slot1;
                    mike = 12;
                    mike = options[mike];
                    mike = tango.bind(entity)(mike);
                    tango = mike.MEDIA_VIEWER;
                    mike = function() {
                        zulu = _closure2_slot11;
                        entity = _closure1_slot10;
                        mike = entity.AUTO;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike = oscar.bind(golf)(report, tango, mike);
                    _fun102273_ip = 186; continue _fun102273;
 109:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 18;
                    tango = oscar[tango];
                    oscar = report.bind(entity)(tango);
                    report = oscar.enterRemixing;
                    tango = {};
                    offset = _closure2_slot0;
                    yankee = tango;
                    golf = copyDataProperties(yankee, offset);
                    options = false;
                    golf = 'local';
                    tango[golf] = options;
                    tango = report.bind(oscar)(tango);
                    zulu = _closure2_slot11;
                    mike = _closure1_slot10;
                    mike = mike.AUTO;
                    mike = zulu.bind(entity)(mike);
 186:
                    return entity;
                }
            };
            offset = yankee.bind(foxtrot)(verify, offset);
            if(entity) { _fun102267_ip = 701; continue _fun102267 }
 673:
            entity = null;
            if(!options) { _fun102267_ip = 1141; continue _fun102267 }
 681:
            entity = null;
            if(!oscar) { _fun102267_ip = 1141; continue _fun102267 }
 689:
            mike = tango < mike;
            entity = null;
            if(!mike) { _fun102267_ip = 1141; continue _fun102267 }
 701:
            tango = _closure1_slot12;
            zulu = _closure1_slot5;
            mike = {};
            options = golf;
            if(!golf) { _fun102267_ip = 804; continue _fun102267 }
 717:
            yankee = _closure1_slot11;
            backup = _closure1_slot1;
            kilo = _closure1_slot2;
            oscar = 20;
            oscar = kilo[oscar];
            verify = backup.bind(report)(oscar);
            oscar = {};
            foxtrot = 21;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(report)(foxtrot);
            oscar['source'] = foxtrot;
            backup = _closure1_slot13;
            kilo = backup.sparkle;
            foxtrot = new Array(2);
            foxtrot[0] = kilo;
            backup = backup.leftSparkle;
            foxtrot[1] = backup;
            oscar['style'] = foxtrot;
            foxtrot = true;
            oscar['disableColor'] = foxtrot;
            options = yankee.bind(report)(verify, oscar);
 804:
            oscar = new Array(3);
            oscar[0] = options;
            if(!golf) { _fun102267_ip = 902; continue _fun102267 }
 815:
            yankee = _closure1_slot11;
            backup = _closure1_slot1;
            kilo = _closure1_slot2;
            options = 20;
            options = kilo[options];
            verify = backup.bind(report)(options);
            options = {};
            foxtrot = 21;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(report)(foxtrot);
            options['source'] = foxtrot;
            backup = _closure1_slot13;
            kilo = backup.sparkle;
            foxtrot = new Array(2);
            foxtrot[0] = kilo;
            backup = backup.rightSparkle;
            foxtrot[1] = backup;
            options['style'] = foxtrot;
            foxtrot = true;
            options['disableColor'] = foxtrot;
            golf = yankee.bind(report)(verify, options);
 902:
            oscar[1] = golf;
            verify = _closure1_slot11;
            yankee = _closure1_slot1;
            sizing = _closure1_slot2;
            golf = 22;
            golf = sizing[golf];
            options = yankee.bind(report)(golf);
            golf = {};
            kilo = _closure1_slot0;
            romeo = 23;
            foxtrot = sizing[romeo];
            foxtrot = kilo.bind(report)(foxtrot);
            output = foxtrot.intl;
            backup = output.string;
            foxtrot = sizing[romeo];
            foxtrot = kilo.bind(report)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.Gp2rPj;
            foxtrot = backup.bind(output)(foxtrot);
            golf['accessibilityLabel'] = foxtrot;
            golf['onPress'] = offset;
            offset = 24;
            offset = sizing[offset];
            offset = yankee.bind(report)(offset);
            golf['icon'] = offset;
            offset = 20;
            offset = sizing[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.Sizes;
            offset = offset.MEDIUM;
            golf['iconSize'] = offset;
            offset = 25;
            offset = sizing[offset];
            offset = kilo.bind(report)(offset);
            yankee = offset.Text;
            offset = {'variant': 'text-sm/bold', 'color': 'white'};
            foxtrot = sizing[romeo];
            foxtrot = kilo.bind(report)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.string;
            romeo = sizing[romeo];
            romeo = kilo.bind(report)(romeo);
            romeo = romeo.t;
            romeo = romeo.Gp2rPj;
            romeo = foxtrot.bind(backup)(romeo);
            offset['children'] = romeo;
            offset = verify.bind(report)(yankee, offset);
            golf['label'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[2] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1141:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 26;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_viewer/native/components/RemixButton.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();