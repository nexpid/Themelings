// app/modules/launchpad/native/shared/ChannelSubtitle.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ChannelSubtitle
        _fun121076: for(var _fun121076_ip = 0; ; ) switch(_fun121076_ip) {
 0:
            entity = argFoo;
            yankee = entity.muted;
            zulu = entity.connected;
            romeo = entity.channelId;
            offset = entity.guildId;
            golf = entity.subtitle;
            oscar = entity.textProps;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            entity = report[entity];
            report = undefined;
            tango = tango.bind(report)(entity);
            entity = tango.getChannelSubtitleData;
            foxtrot = entity.bind(tango)(golf);
            entity = null;
            if(!(entity != foxtrot)) { _fun121076_ip = 244; continue _fun121076 }
 82:
            golf = foxtrot.type;
            tango = 'voice';
            verify = tango === golf;
            if(!verify) { _fun121076_ip = 101; continue _fun121076 }
 98:
            verify = zulu;
 101:
            tango = _closure1_slot4;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 4;
            mike = options[mike];
            mike = golf.bind(report)(mike);
            zulu = mike.Text;
            mike = {};
            sizing = mike;
            kilo = oscar;
            oscar = copyDataProperties(sizing, kilo);
            oscar = 6;
            oscar = options[oscar];
            options = golf.bind(report)(oscar);
            golf = options.renderMessagePreviewMarkup;
            oscar = {};
            foxtrot = foxtrot.subtitle;
            oscar['content'] = foxtrot;
            foxtrot = entity != yankee;
            if(!foxtrot) { _fun121076_ip = 182; continue _fun121076 }
 179:
            foxtrot = yankee;
 182:
            oscar['muted'] = foxtrot;
            oscar['channelId'] = romeo;
            oscar['guildId'] = offset;
            offset = 'text-muted';
            if(!yankee) { _fun121076_ip = 210; continue _fun121076 }
 204:
            offset = 'interactive-muted';
 210:
            oscar['color'] = offset;
            verify = !verify;
            oscar['disableAnimatedEmoji'] = verify;
            golf = golf.bind(options)(oscar);
            oscar = 'children';
            mike[oscar] = golf;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 244:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SUBTITLE_OPACITY_NORMAL;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/launchpad/native/shared/ChannelSubtitle.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: renderChannelSubtitle
        _fun121077: for(var _fun121077_ip = 0; ; ) switch(_fun121077_ip) {
 0:
            entity = argFoo;
            options = entity.subtitle;
            offset = entity.muted;
            romeo = entity.channelId;
            yankee = entity.guildId;
            verify = entity.connected;
            entity = null;
            if(!(entity != options)) { _fun121077_ip = 265; continue _fun121077 }
 40:
            golf = {};
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 3;
            mike = report[mike];
            oscar = undefined;
            mike = tango.bind(oscar)(mike);
            mike = mike.bind(oscar)();
            mike = mike.messagePreview;
            mike = mike.text;
            mike = mike.variant;
            golf['variant'] = mike;
            mike = 'text-muted';
            if(!offset) { _fun121077_ip = 106; continue _fun121077 }
 100:
            mike = 'interactive-muted';
 106:
            golf['color'] = mike;
            tango = 1;
            golf['lineClamp'] = tango;
            mike = 1.75;
            golf['maxFontSizeMultiplier'] = mike;
            mike = {};
            if(offset) { _fun121077_ip = 142; continue _fun121077 }
 138:
            tango = _closure1_slot3;
 142:
            mike['opacity'] = tango;
            golf['style'] = mike;
            tango = 'string';
            mike = typeof options;
            if(!(tango !== mike)) { _fun121077_ip = 207; continue _fun121077 }
 161:
            report = _closure1_slot4;
            tango = _closure1_slot5;
            mike = {};
            mike['channelId'] = romeo;
            mike['guildId'] = yankee;
            mike['subtitle'] = options;
            mike['muted'] = offset;
            mike['connected'] = verify;
            mike['textProps'] = golf;
            mike = report.bind(oscar)(tango, mike);
            _fun121077_ip = 263; continue _fun121077;
 207:
            report = _closure1_slot4;
            tango = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 4;
            zulu = verify[zulu];
            zulu = tango.bind(oscar)(zulu);
            tango = zulu.Text;
            zulu = {};
            backup = zulu;
            foxtrot = golf;
            golf = copyDataProperties(backup, foxtrot);
            golf = 'children';
            zulu[golf] = options;
            mike = report.bind(oscar)(tango, zulu);
 263:
            return mike;
 265:
            return entity;
        }
    };
    zulu['renderChannelSubtitle'] = mike;
    return entity;
})();