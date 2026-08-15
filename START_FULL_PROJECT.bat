@echo off
color 0b
echo ===================================================
echo     Ms Onlinebd - Startup Orchestrator (FE + BE)
echo ===================================================
echo.
echo Launching server components...
echo.

:: Launch backend in a new cmd window
echo Starting Backend API (Port 5000) on a separate channel...
start "Ms Onlinebd Backend Server" cmd /k "cd backend && npm run dev"

:: Launch frontend in the current windows
echo Starting Frontend Next.js Server (Port 3000)...
cd frontend
npm run dev

pause
