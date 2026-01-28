import React from "react";
import {
  Typography,
  Grid,
  Paper,
  Box,
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import {
  Description,
  People,
  Comment,
  PendingActions,
  TrendingUp,
  ArrowForward,
  FiberManualRecord,
} from "@mui/icons-material";

// --- Sub-Component: Statistical Card ---
const StatCard = ({ title, value, icon, color, trend }) => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      borderRadius: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      bgcolor: "white",
      border: "1px solid #edf2f7",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0px 20px 40px rgba(0,0,0,0.04)",
      },
    }}
  >
    <Box>
      <Typography
        variant="body2"
        color="textSecondary"
        fontWeight={700}
        sx={{ mb: 0.5, opacity: 0.7 }}
      >
        {title}
      </Typography>
      <Typography variant="h4" fontWeight={900} color="#1e293b">
        {value}
      </Typography>
      {trend && (
        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mt: 1 }}>
          <TrendingUp sx={{ fontSize: 16, color: "success.main" }} />
          <Typography
            variant="caption"
            sx={{ color: "success.main", fontWeight: 700 }}
          >
            {trend}
          </Typography>
        </Stack>
      )}
    </Box>
    <Avatar
      sx={{
        bgcolor: `${color}15`,
        color: color,
        width: 56,
        height: 56,
        borderRadius: "16px",
      }}
    >
      {icon}
    </Avatar>
  </Paper>
);

// --- Sub-Component: Simple CSS Bar Chart ---
const MockChart = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      height: 200,
      mt: 4,
      px: 2,
    }}
  >
    {[60, 40, 90, 70, 50, 85, 100].map((height, i) => (
      <Box key={i} sx={{ textAlign: "center", width: "10%" }}>
        <Box
          sx={{
            height: `${height}%`,
            bgcolor: i === 6 ? "primary.main" : "#e2e8f0",
            borderRadius: "6px 6px 0 0",
            transition: "0.3s",
            "&:hover": { bgcolor: "primary.light" },
          }}
        />
        <Typography
          variant="caption"
          color="textSecondary"
          sx={{ mt: 1, display: "block" }}
        >
          {["M", "T", "W", "T", "F", "S", "S"][i]}
        </Typography>
      </Box>
    ))}
  </Box>
);

const Dashboard = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: "#f4f7fe", minHeight: "100vh" }}>
      {/* Header Area */}
      <Box
        sx={{
          mb: 5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={900}
            sx={{ color: "#1e293b", letterSpacing: "-1px" }}
          >
            Analytics Overview
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Everything looks great, Jane! Here is your summary.
          </Typography>
        </Box>
        <Button
          variant="contained"
          disableElevation
          sx={{
            borderRadius: 3,
            textTransform: "none",
            fontWeight: 700,
            px: 3,
            display: { xs: "none", sm: "flex" },
          }}
        >
          Download Report
        </Button>
      </Box>

      {/* Top Stat Grid */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Posts"
            value="1,240"
            icon={<Description />}
            color="#6366f1"
            trend="+12.5%"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Users"
            value="852"
            icon={<People />}
            color="#10b981"
            trend="+5.2%"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Comments"
            value="342"
            icon={<Comment />}
            color="#f59e0b"
            trend="+18%"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Pending"
            value="14"
            icon={<PendingActions />}
            color="#ef4444"
          />
        </Grid>
      </Grid>

      {/* Main Content Grid */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {/* Left Side: Chart Section */}
        <Grid item xs={12} lg={8}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 5,
              border: "1px solid #edf2f7",
              elevation: 0,
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography variant="h6" fontWeight={800}>
                  Weekly Growth
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Comparison of post engagement
                </Typography>
              </Box>
              <Button
                size="small"
                endIcon={<ArrowForward />}
                sx={{ textTransform: "none", fontWeight: 700 }}
              >
                View Details
              </Button>
            </Stack>

            <MockChart />

            <Divider sx={{ my: 3 }} />
            <Stack direction="row" spacing={4}>
              <Box>
                <Typography variant="h6" fontWeight={800}>
                  $4,250
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Total Revenue
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight={800} color="success.main">
                  +24%
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  Profit margin
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>

        {/* Right Side: Activity Feed */}
        <Grid item xs={12} lg={4}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 5,
              border: "1px solid #edf2f7",
              elevation: 0,
              height: "100%",
            }}
          >
            <Typography variant="h6" fontWeight={800} mb={3}>
              Recent Activity
            </Typography>
            <List>
              {[
                {
                  user: "Sarah M.",
                  action: "published a new post",
                  time: "2 min ago",
                  color: "#6366f1",
                },
                {
                  user: "System",
                  action: "database backup completed",
                  time: "1 hour ago",
                  color: "#10b981",
                },
                {
                  user: "Mike Ross",
                  action: "reported a comment",
                  time: "3 hours ago",
                  color: "#ef4444",
                },
                {
                  user: "Admin",
                  action: "updated security settings",
                  time: "5 hours ago",
                  color: "#f59e0b",
                },
              ].map((item, index) => (
                <ListItem key={index} alignItems="flex-start" sx={{ px: 0 }}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: item.color, width: 32, height: 32 }}>
                      <FiberManualRecord sx={{ fontSize: 12 }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="body2" fontWeight={700}>
                        {item.user}
                      </Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          variant="caption"
                          color="text.primary"
                          sx={{ display: "block" }}
                        >
                          {item.action}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          {item.time}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                mt: 2,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              View All Logs
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

// Simple Stack helper for layout
const Stack = ({
  children,
  direction = "column",
  spacing = 0,
  justifyContent,
  alignItems,
  sx,
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: direction,
      gap: spacing,
      justifyContent,
      alignItems,
      ...sx,
    }}
  >
    {children}
  </Box>
);

export default Dashboard;
